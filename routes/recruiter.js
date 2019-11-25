const router = require("express").Router();
<<<<<<< HEAD
const { Recruiter, Candidate, JobPosting } = require("../db/models/");
=======

const { Recruiter, Candidate, JobPosting } = require("../db/models/");

>>>>>>> 90316c6dbf3e1cd3276c5cdc2910385ffb790bd0
const passport = require("../db/passport/passportRecruiter");

//register, login y logout

router.post("/register", function(req, res) {
  Recruiter.findOrCreate({ where: req.body }).then(([recruiter, created]) => {
    if (created) {
      res.send(recruiter);
    } else {
      res.send("Este email ya esta registrado.");
    }
  });
});

router.post("/login", passport.authenticate("recruiter"), function(req, res) {
  console.log(req.body);
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

// agregar y editar candidatos

<<<<<<< HEAD
router.post("/candidates/csvImport", function (req, res) {
=======
router.post("/candidates/csvImport", function(req, res) {
>>>>>>> 90316c6dbf3e1cd3276c5cdc2910385ffb790bd0
  Candidate.bulkCreate([...req.body]).then(candidates => res.send(candidates));
});

router.post("/candidatos", function(req, res) {
  console.log(req.body);
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

router.put("/candidates/edit/:id", function(req, res) {
  Candidate.findOne({ where: { id: req.params.id } }).then(candidate => {
    candidate.update(req.body).then(updatedCandidate => {
      res.send(updatedCandidate);
    });
  });
});

//encuentra TODAS las busquedas activas, cuando el admin pueda asignar recruiters a las busquedas hay que cambiar que el recruiter solo acceda a esas
router.get("/jobpostings", function(req, res) {
  JobPosting.findAll({
    where: {
      state: "Activa"
    }
  }).then(jobs => res.send(jobs));
});

router.post("/jobpostings/:id", function(req, res) {
  JobPosting.findOne({ where: { id: req.params.id } }).then(job => {
    Candidate.findOne({ where: { id: req.body.id } }).then(candidate => {
      job.addCandidate(candidate).then(() => {
        job.getCandidates().then(response => res.send(response));
      });
    });
  });
});

module.exports = router;
