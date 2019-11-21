const router = require("express").Router();
const Client = require("../db/models/Client");
const passport = require("../db/passport/passportClient");

router.post("/register", function(req, res) {
  Client.create(req.body).then(client =>
    req.login(client, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send(client);
      }
    })
  );
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  console.log(req.body);
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
