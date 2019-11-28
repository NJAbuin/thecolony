const router = require("express").Router();

router.get("/", function(req, res) {
  console.log(req.user);
  res.send(req.user);
});

module.exports = router;
