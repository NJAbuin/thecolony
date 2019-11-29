const router = require("express").Router();
const { Recruiter, Candidate, JobPosting } = require("../db/models/");
const passport = require("../db/passport/passportRecruiter");
const chalk = require("chalk");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');
const dateFormat = require('dateformat');

const storage = multer.diskStorage({
  destination(res, file, cb) {
    let dir = './dist/uploads'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.mkdirSync(dir + '/cv');
    }
    cb(null, './dist/uploads/cv');
  },
  filename(req, file, cb) {
    const renowned = file.originalname.replace(/[^a-zA-Z0-9]/g, '_');
    cb(null, `${renowned}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  Recruiter.findOne({ where: { fullName: 'Carola Marini' } }).then((recruiter) => {
    recruiter.createCandidate({
      fullName: req.body.fullName,
      DNI: req.body.DNI,
      age: req.body.age,
      jobTitle: req.body.jobTitle,
      address: req.body.adress,
      exprectedSalary: req.body.exprectedSalary,
      CV: req.file.path
    }).then((candidate) => {
      let dataBuffer = fs.readFileSync(req.file.path);
      pdf(dataBuffer)
        .then(data => res.status(200).send(data))
    });
  })


})


//register, login y logout

router.post("/register", function (req, res) {
  Recruiter.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send("Este email ya esta registrado.")
        : Recruiter.create(req.body).then(recruiter => res.send(recruiter))
    )
    .catch(err => console.log(err));
});

router.post("/login", passport.authenticate("recruiter"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

// agregar y editar candidatos
router.post("/candidates/csvImport", function (req, res) {
  req.body.csvValues.forEach(candidate => {
    Recruiter.findOne({ where: { id: req.body.user.id } }).then(recruiter =>
      recruiter.createCandidate(candidate)
    );
  });
  res.send("Created");
});

router.post("/candidatos", function (req, res) {
  Recruiter.findOne({ where: { id: req.body.recruiterID } })
    .then(recruiter => {
      Candidate.create(req.body).then(candidate => {
        candidate.setRecruiter(recruiter);
      });
    })
    .then(candidate => res.send(candidate));
});

router.get("/candidates", (req, res) =>
  Candidate.findAll({}).then(candidates => res.send(candidates))
);

router.put("/candidates/edit/:id", function (req, res) {
  Candidate.findOne({ where: { id: req.params.id } }).then(candidate => {
    candidate.update(req.body).then(updatedCandidate => {
      res.send(updatedCandidate);
    });
  });
});

//encuentra TODAS las busquedas activas, cuando el admin pueda asignar recruiters a las busquedas hay que cambiar que el recruiter solo acceda a esas
router.get("/jobpostings", function (req, res) {
  JobPosting.findAll({
    where: {
      state: "Activa"
    }
  }).then(jobs => res.send(jobs));
});

router.post("/jobpostings", function (req, res) {
  console.log(chalk.bgRed(JSON.stringify(req.body)));
  JobPosting.findOne({ where: { id: req.body.id } })
    .then(job => {
      req.body.newCandidates.map(c => {
        Candidate.findByPk(c.id).then(candidate => job.addCandidate(candidate));
      });
      return job.getCandidates();
    })
    .then(candidates => res.send(candidates));
});

//agregar un candidato desde el detalle de singleJobPosting

router.post("/jobpostings/:id", function (req, res) {
  JobPosting.findOne({ where: { id: req.params.id } }).then(job => {
    Candidate.findOne({ where: { id: req.body.id } }).then(candidate => {
      job.addCandidate(candidate).then(() => {
        job.getCandidates().then(response => res.send(response));
      });
    });
  });
});

router.get("/jobpostings/:id", function (req, res) {
  JobPosting.findOne({
    include: [
      {
        model: Candidate
      }
    ],
    where: { id: req.params.id }
  }).then(job => res.send(job));
});

module.exports = router;
