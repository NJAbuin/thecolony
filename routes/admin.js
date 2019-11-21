const router = require("express").Router();
const Admin = require("../db/models/Admin");
const passport = require("../db/passport/passportAdmin");

router.post("/register", function(req, res) {
  Admin.create(req.body).then(admin =>
    req.login(admin, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send(admin);
      }
    })
  );
});

router.post("/login", passport.authenticate("admin"), function(req, res) {
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
