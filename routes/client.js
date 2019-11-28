const router = require("express").Router();
const { Client, JobPosting } = require("../db/models");
const passport = require("../db/passport/");

router.post("/register", function(req, res) {
  Client.findOne({ where: { email: req.body.email } })
    .then(user =>
      user
        ? res.send("Este email ya esta registrado.")
        : Client.create(req.body).then(client => res.send(client))
    )
    .catch(err => console.log(err));
});

router.post("/login", passport.authenticate("client"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

router.post("/jobposting", function(req, res) {
  Client.findOne({ where: { id: 1 } })
    .then(client => {
      client.createJobposting({
        title: "Titulo",
        description: "Descripcion del trabajo",
        startingDate: "02/02/2020",
        openings: 5,
        salary: "20000",
        state: "Activa",
        workload: "5",
        benefits: "muchos benefits"
      });
    })
    .then(() => {
      res.status(201).send("Jobpost created");
    })
    .catch(e => res.send(e));
});

module.exports = router;
