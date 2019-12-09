const router = require("express").Router();
const passport = require("../db/passport/");
const {
  Admin,
  Client,
  Recruiter
} = require("../db/models/");
const jwtSecret = require("../db/passport/jwtConfig")
const jwt = require('jsonwebtoken')

//REGISTER Y LOGIN

//ADMIN

router.post("/admin/register", function (req, res) {
  Admin.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send({ alreadyInDB: true })
        : Admin.create(req.body).then(admin => res.send(admin))
    )
    .catch(err => console.log(err));
});


router.post("/admin/login", passport.authenticate("admin"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  }).catch(e => res.send(e));;
});

// CLIENT

router.post("/client/register", function (req, res) {
  Client.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send({ alreadyInDB: true })
        : Client.create(req.body).then(client => res.send(client))
    )
    .catch(err => console.log(err));
});


router.post("/client/login", passport.authenticate("client"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  });
});

// RECRUITER

router.post("/recruiter/register", function (req, res) {
  Recruiter.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send({ alreadyInDB: true })
        : Recruiter.create(req.body).then(recruiter => res.send(recruiter))
    )
    .catch(err => console.log(err));
});


router.post("/recruiter/login", passport.authenticate("recruiter"), (req, res) => {
  if (req.user.permissions == "pendiente") {
    res.send("pendiente")
  } else {
    res.send({
      fullName: req.user.fullName,
      email: req.user.email,
      type: req.user.type,
      id: req.user.id,
      permissions: req.user.permissions
    });
  }
});

//LOGOUT

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});


module.exports = router;
