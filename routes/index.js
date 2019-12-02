const router = require("express").Router();
const seed = require("./seed");
const meRouter = require("./me");
const adminRouter = require("./admin");
const clientRouter = require("./client");
const recruiterRouter = require("./recruiter");
const candidatesRouter = require('./candidates')

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200); //que se mande solo al logoutear exitosamente
});

router.use("/seed", seed);
router.use("/me", meRouter);
router.use("/admin", adminRouter);
router.use("/client", clientRouter);
router.use("/recruiter", recruiterRouter);
router.use("/candidates", candidatesRouter);

module.exports = router;
