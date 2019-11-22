const router = require("express").Router();
const Admin = require("../db/models/Admin");
const passport = require("../db/passport/passportAdmin");

<<<<<<< HEAD
router.post("/register", function (req, res) {
  Admin.findOrCreate({ where: req.body })
    .then(([admin, created]) => {
      if (created) {
        res.send(admin);
      } else {
        res.send("Este email ya esta registrado.")
      }
=======
router.post("/register", function(req, res) {
  Admin.findOrCreate({ where: req.body }).then(([admin, created]) => {
    console.log([admin, created]);
    if (created) {
      req.login(admin, function(err) {
        if (err) {
          console.log(err);
        } else {
          res.send(admin);
        }
      });
    } else {
      res.send("Este email ya esta registrado.");
>>>>>>> bfa2ec9a34a38413ed4a05af3d93f0b9e0003768
    }
  });
});

router.post("/login", passport.authenticate("admin"), function(req, res) {
  res.send(req.user); //checkear en front si el req.user existe
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200); //que se mande solo al logoutear exitosamente
});

module.exports = router;
