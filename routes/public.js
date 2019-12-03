const router = require("express").Router();
const { Recruiter, Candidate, JobPosting, Report, Client, Admin } = require("../db/models/");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdf = require("pdf-parse");

//CANDIDATOS

// 1. agregar candidatos y sus CV como RECRUITER

// 1.a agregar CV

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

router.post("/upload", upload.single("file"), (req, res) => {
    Recruiter.findOne({ where: { id: req.user.id } }).then(recruiter => {
        let cv;
        req.file ? (cv = req.file.path) : (cv = "n/a");
        recruiter
            .createCandidate({
                fullName: req.body.fullName,
                DNI: req.body.DNI,
                age: req.body.age,
                jobTitle: req.body.jobTitle,
                address: req.body.adress,
                exprectedSalary: req.body.exprectedSalary,
                CV: cv
            })
            .then(candidate => {
                if (cv != "n/a") {
                    let dataBuffer = fs.readFileSync(req.file.path);
                    pdf(dataBuffer).then(data => res.status(200).send(data));
                } else {
                    res.send(candidate);
                }
            })
            .catch(e => res.send(false));
    });
});

//1.b agregarlos con el archivo CSV 

router.post("/candidates/csvImport", function (req, res) {
    req.body.csvValues.forEach(candidate => {
        Recruiter.findOne({ where: { id: req.body.user.id } }).then(recruiter =>
            recruiter.createCandidate(candidate)
        );
    });
    res.send("Created");
});

//1.c agregarlos uno por uno

router.post("/candidatos", function (req, res) {
    Recruiter.findOne({ where: { id: req.body.recruiterID } })
        .then(recruiter => {
            Candidate.create(req.body).then(candidate => {
                candidate.setRecruiter(recruiter);
            });
        })
        .then(candidate => res.send(candidate));
});



module.exports = router