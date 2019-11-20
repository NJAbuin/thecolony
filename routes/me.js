const router = require("express").Router();

router.get("/", function (req, res) {
    res.send(req.user);
});

module.exports = router;
