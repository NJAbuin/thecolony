const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Recruiter } = require("../db/models");
const pdf = require("pdf-parse");
// const dateFormat = require('dateformat');

const storage = multer.diskStorage({
  destination(res, file, cb) {
    let dir = "./dist/uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.mkdirSync(dir + "/cv");
    }
    cb(null, "./dist/uploads/cv");
  },
  filename(req, file, cb) {
    const renowned = file.originalname.replace(/[^a-zA-Z0-9]/g, "_");
    cb(null, `${renowned}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
  Recruiter.findOne({ where: { id: 1 } })
    .then(recruiter => {
      recruiter.createCandidate(req.body);
    })
    .then(() => {
      let dataBuffer = fs.readFileSync("req.file.path");
      console.log(dataBuffer);

      pdf(dataBuffer).then(data => res.status(200).send(data));
    });
});
module.exports = router;
