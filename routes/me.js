const router = require("express").Router();

router.get("/", function(req, res) {
  if (req.user) {
    const { fullName, email, type, id } = req.user;
    res.send({ fullName, email, type, id });
  }
  res.status(200).send({});
});

module.exports = router;
