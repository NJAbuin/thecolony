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


//get all clients
router.get("/clients", function (req, res) {
  Client.findAll().then(clients => res.send(clients));
});

//RUD Recruiters (falta edit)

router.get("/recruiters", function (req, res) {
  Recruiter.findAll().then(recruiters => res.send(recruiters));
});

//edit iria aca

router.delete("/recruiters/delete/:id", function (req, res) {
  Recruiter.findOne({ where: { id: req.params.id } })
    .then(recruiter => {
      recruiter.destroy();
    })
    .then(() => res.send("Recrutador eliminado con exito"));
});

//RUD ADMINS

router.get("/admins", function (req, res) {
  Admin.findAll().then(admins => res.send(admins));
});

router.put("admins/edit/:id", function (req, res) {
  Admin.findOne({ where: { id: req.params.id } }).then(admin => {
    admin.update(req.body).then(updatedAdmin => {
      res.send(updatedAdmin);
    });
  });
});

router.delete("/admins/delete/:id", function (req, res) {
  Admin.findOne({ where: { id: req.params.id } })
    .then(admin => {
      admin.destroy();
    })
    .then(() => res.send("Admin eliminado con exito"));
});

module.exports = router;
