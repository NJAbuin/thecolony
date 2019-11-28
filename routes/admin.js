const router = require("express").Router();
const Admin = require("../db/models/Admin");
const passport = require("../db/passport/");

router.post("/register", function(req, res) {
  Admin.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        res.send("Este email ya esta registrado.");
      } else {
        Admin.create(req.body).then(admin => res.send(admin));
      }
    })
    .catch(err => console.log(err));
});

router.post("/login", passport.authenticate("admin"), (req, res) => {
  res.send({
    fullName: req.user.fullName,
    email: req.user.email,
    type: req.user.type,
    id: req.user.id
  });
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200); //que se mande solo al logoutear exitosamente
});

module.exports = router;
