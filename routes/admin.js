const router = require("express").Router();
const passport = require("../db/passport/");
const {
  Admin,
  Candidate,
  JobPosting,
  Report,
  Client,
  Recruiter
} = require("../db/models/");

router.get("/jobpostings", function(req, res) {
  JobPosting.findAll({
    include: [
      {
        model: Candidate
      }
    ]
  })
    .then(job => res.send(job))
    .catch(e => res.send(e));
});

router.put("/jobpostings/edit/:id", function(req, res) {
  JobPosting.findOne({ where: { id: req.params.id } })
    .then(job => {
      return job.update(req.body);
    })
    .then(updated => res.send(updated));
});

router.delete("/jobpostings/delete/:id", function(req, res) {
  JobPosting.findOne({ where: { id: req.params.id } })
    .then(job => {
      job.destroy();
    })
    .then(() => res.send("Busqueda eliminada con exito"));
});

router.get("/candidate/:id", function(req, res) {
  Candidate.findOne({
    where: { id: req.params.id }
  })
    .then(candidate => res.send(candidate))
    .catch(e => res.send(e));
});

router.put("/candidates/edit/:id", function(req, res) {
  Candidate.findOne({ where: { id: req.params.id } }).then(candidate => {
    candidate.update(req.body).then(updatedCandidate => {
      res.send(updatedCandidate);
    });
  });
});

router.get("/candidates", (req, res) =>
  Candidate.findAll().then(candidates => res.send(candidates))
);

router.get("/jobpostings/:jobID/:candidateID/report", function(req, res) {
  Report.findOne({
    where: {
      candidateID: req.params.candidateID,
      jobPostingID: req.params.jobID
    }
  }).then(report => res.send(report.informe));
});

//ruta duplicada en Clients
router.get("/clients", function(req, res) {
  Client.findAll().then(clients => res.send(clients));
});

//RUD Recruiters (falta edit)

router.get("/recruiters", function(req, res) {
  Recruiter.findAll().then(recruiters => res.send(recruiters));
});

//edit iria aca

router.delete("/recruiters/delete/:id", function(req, res) {
  Recruiter.findOne({ where: { id: req.params.id } })
    .then(recruiter => {
      recruiter.destroy();
    })
    .then(() => res.send("Recrutador eliminado con exito"));
});

//RUD ADMINS

router.get("/admins", function(req, res) {
  Admin.findAll().then(admins => res.send(admins));
});

router.put("admins/edit/:id", function(req, res) {
  Admin.findOne({ where: { id: req.params.id } }).then(admin => {
    admin.update(req.body).then(updatedAdmin => {
      res.send(updatedAdmin);
    });
  });
});

router.delete("/admins/delete/:id", function(req, res) {
  Admin.findOne({ where: { id: req.params.id } })
    .then(admin => {
      admin.destroy();
    })
    .then(() => res.send("Admin eliminado con exito"));
});

module.exports = router;
