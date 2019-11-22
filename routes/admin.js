const router = require("express").Router();
const Admin = require("../db/models/Admin");
const passport = require("../db/passport/passportAdmin");

router.post("/register", function (req, res) {
  Admin.findOrCreate({ where: req.body })
    .then(([admin, created]) => {
      if (created) {
        res.send(admin);
      } else {
        res.send("Este email ya esta registrado.")
      }
    }
    )
})

router.post("/login", passport.authenticate("admin"), function (req, res) {
  res.send(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
