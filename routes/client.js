const router = require("express").Router();
const { Client, JobPosting } = require("../db/models");
const passport = require("../db/passport/");

router.post("/jobposting", function(req, res) {
  const uId = req.user.type === "admin" ? req.body.clientId : req.user.id;
  Client.findOne({ where: { id: uId } })
    .then(client => client.createJobposting(req.body))
    .then(() => res.status(201).send(true))
    .catch(e => res.send(e));
});

router.get("/", (req, res) =>
  Client.findAll({}).then(allClients => res.send(allClients))
);

module.exports = router;
