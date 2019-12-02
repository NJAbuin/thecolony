const router = require("express").Router();
const passport = require("../db/passport/");
const { Admin, Candidate, JobPosting } = require("../db/models/");

router.post("/register", function (req, res) {
  Admin.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send({ alreadyInDB: true })
        : Admin.create(req.body).then(admin => res.send(admin))
    )
    .catch(err => console.log(err));
});

router.post("/login", passport.authenticate("admin"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  }).catch(e => res.send(e));;
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200); //que se mande solo al logoutear exitosamente
});

router.get("/jobpostings", function (req, res) {
  JobPosting.findAll({
    include: [
      {
        model: Candidate
      }
    ]
  }).then(job => res.send(job))
    .catch(e => res.send(e));;
});

router.get("/candidate/:id", function (req, res) {
  Candidate.findOne({
    where: { id: req.params.id }
  }).then(candidate => res.send(candidate)).catch(e => res.send(e));
})

module.exports = router;
