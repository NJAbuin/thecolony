const router = require("express").Router();
const { Recruiter, Candidate, JobPosting, Report } = require("../db/models/");
const passport = require("../db/passport/");
const chalk = require("chalk");
const dateFormat = require("dateformat");



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



router.get("/jobpostings/:jobID/:candidateID/report", function (req, res) {
  Report.findOne({
    where: {
      candidateID: req.params.candidateID,
      jobPostingID: req.params.jobID
    }
  }).then(report => res.send(report.informe));
});

router.post("/jobpostings/:jobID/:candidateID/report", function (req, res) {
  Report.create({
    candidateID: req.params.candidateID,
    jobPostingID: req.params.jobID,
    informe: req.body.informe
  }).then(report => res.send(report.informe));
});

module.exports = router;
