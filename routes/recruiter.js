const router = require("express").Router();
<<<<<<< HEAD
const { Recruiter, Candidate, JobPosting } = require("../db/models/");
=======
const JobPosting = require('../db/models/JobPosting')

const { Recruiter } = require("../db/models/");
const { Candidate } = require("../db/models/");
>>>>>>> bcbe6fa3dcaa540a6d94c82dd4b77078aeacdd5b
const passport = require("../db/passport/passportRecruiter");

//register, login y logout

router.post("/register", function (req, res) {
  Recruiter.findOrCreate({ where: req.body }).then(([recruiter, created]) => {
    if (created) {
      res.send(recruiter);
    } else {
      res.send("Este email ya esta registrado.");
    }
  });
});

router.post("/login", passport.authenticate("recruiter"), function (req, res) {
  console.log(req.body);
  res.send(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

// agregar y editar candidatos

<<<<<<< HEAD
router.post("/candidatos/csvImport", function (req, res) {
=======
router.post("/candidates/csvImport", function (req, res) {
>>>>>>> bcbe6fa3dcaa540a6d94c82dd4b77078aeacdd5b
  Candidate.bulkCreate([...req.body]).then(candidates => res.send(candidates));
});

router.post("/candidatos", function (req, res) {
  console.log(req.body);
  Recruiter.findOne({ where: { id: req.body.recruiterID } })
    .then(recruiter => {
      Candidate.create(req.body).then(candidate => {
        candidate.setRecruiter(recruiter);
      });
    })
    .then(candidate => res.send(candidate));
});


router.get('/candidates', (req, res) => Candidate.findAll({}).then(
  candidates => res.send(candidates)))


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
  }).then((jobs) => res.send(jobs))
})

router.post("/jobpostings/:id", function (req, res) {
  JobPosting.findOne({ where: { id: req.params.id } }).then((job) => {
    Candidate.findOne({ where: { id: req.body.id } }).then((candidate) => {
      job.addCandidate(candidate)
        .then(() => {
          job.getCandidates().then((response) => res.send(response))
        })
    })
  })
})

module.exports = router;
