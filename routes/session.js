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


router.post('/admin/login', (req, res, next) => {
  passport.authenticate('admin', (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, err => {
        Admin.findOne({
          where: {
            email: user.email
          },
        }).then(user => {
          const token = jwt.sign({ id: user.email }, jwtSecret.secret);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
            fullName: req.user.fullName,
            email: req.user.email,
            type: req.user.type,
            id: req.user.id
          });
        });
      });
    }
  })(req, res, next);
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


router.post('/client/login', (req, res, next) => {
  passport.authenticate("client", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, err => {
        Client.findOne({
          where: {
            email: user.email
          },
        }).then(user => {
          const token = jwt.sign({ id: user.email }, jwtSecret.secret);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
            fullName: req.user.fullName,
            email: req.user.email,
            type: req.user.type,
            id: req.user.id
          });
        });
      });
    }
  })(req, res, next);
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

router.post('/recruiter/login', (req, res, next) => {
  passport.authenticate("recruiter", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, err => {
        Recruiter.findOne({
          where: {
            email: user.email
          },
        }).then(user => {
          const token = jwt.sign({ id: user.email }, jwtSecret.secret);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
            fullName: req.user.fullName,
            email: req.user.email,
            type: req.user.type,
            id: req.user.id
          });
        });
      });
    }
  })(req, res, next);
});

//LOGOUT

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
