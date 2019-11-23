const router = require("express").Router();
const Admin = require("../db/models/Admin");
const passport = require("../db/passport/passportAdmin");

router.post("/register", function (req, res) {
  Admin.findOrCreate({ where: req.body }).then(([admin, created]) => {
    if (created) {
      req.login(admin, function (err) {
        err ? console.log(err) : res.send(admin);
      });
    }
    else
      res.send("Este email ya esta registrado.");
  });
});

router.post("/login", passport.authenticate("admin"), function (req, res) {
  res.send(req.user); //checkear en front si el req.user existe
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200); //que se mande solo al logoutear exitosamente
});

module.exports = router;
