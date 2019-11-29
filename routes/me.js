const router = require("express").Router();

router.get("/", function (req, res) {
  if (req.user) {
    const { fullName, email, type, id } = req.user;
    res.send({ fullName, email, type, id });
  }
});

module.exports = router;
