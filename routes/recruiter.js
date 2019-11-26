const router = require("express").Router();
const { Recruiter, Candidate, JobPosting } = require("../db/models/");
const passport = require("../db/passport/passportRecruiter");

//register, login y logout

router.post("/register", function(req, res) {
  Recruiter.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        res.send("Este email ya esta registrado.");
      } else {
        Recruiter.create(req.body).then(recruiter => res.send(recruiter));
      }
    })
    .catch(err => console.log(err));
});

router.post("/login", passport.authenticate("recruiter"), function(req, res) {
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

// agregar y editar candidatos

router.post("/candidates/csvImport", function(req, res) {
  Candidate.bulkCreate([...req.body]).then(candidates => res.send(candidates));
});

router.post("/candidatos", function(req, res) {
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

router.get("/jobpostings/:id", function(req, res) {
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
