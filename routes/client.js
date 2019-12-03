const router = require("express").Router();
const { Client, JobPosting } = require("../db/models");
const passport = require("../db/passport/");



router.post("/jobposting", function (req, res) {
  Client.findOne({ where: { id: req.user.id } })
    .then(client => {
      client.createJobposting(req.body);
    })
    .then(() => {
      res.status(201).send(true);
    })
    .catch(e => res.send(e));
});

router.get("/", (req, res) =>
  Client.findAll({}).then(allClients => res.send(allClients))
);

module.exports = router;
