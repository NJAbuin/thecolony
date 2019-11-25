const router = require("express").Router();
const JobPosting = require('../db/models/JobPosting')
const Recruiter = require("../db/models/Recruiter");
const Candidate = require("../db/models/Candidate");
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

router.post("/candidates/csvImport", function (req, res) {
  Candidate.bulkCreate([...req.body]).then(candidates => res.send(candidates));
});

router.post("/candidates", function (req, res) {
  Candidate.create(req.body).then(candidate => res.send(candidate));
});

router.get('/candidates', (req, res) => Candidate.findAll({}).then(candidates => res.send(candidates)))

router.get('/jobpostings', (req, res) => JobPosting.findAll({}).then(jobPostings => res.send(jobPostings)))

router.put("/candidates/edit/:id", function (req, res) {
  Candidate.findOne({ where: { id: req.params.id } }).then(candidate => {
    console.log(candidate);
    console.log(req.body);
    candidate.update(req.body).then(updatedCandidate => {
      console.log(updatedCandidate);
      res.send(updatedCandidate);
    });
  });
});

module.exports = router;
