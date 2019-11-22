const router = require("express").Router();
const Client = require("../db/models/Client");
const passport = require("../db/passport/passportClient");

router.post("/register", function (req, res) {
  Client.findOrCreate({ where: { email: req.body.email } })
    .then(([client, created]) => {
      if (created) {
        req.login(client, function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send(client);
          }
        }
        )
      } else {
        res.send("Este email ya esta registrado.")
      }
    }
    )
});

router.post("/login", passport.authenticate("client"), function (req, res) {
  console.log(req.body);
  res.send(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
