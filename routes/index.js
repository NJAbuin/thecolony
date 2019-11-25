const router = require("express").Router();
const adminRouter = require("./admin");
const recruiterRouter = require("./recruiter");
const clientRouter = require("./client");
const meRouter = require("./me");
const seed = require("./seed");

router.use("/seed", seed);
router.use("/me", meRouter);
router.use("/admin", adminRouter);
router.use("/client", clientRouter);
router.use("/recruiter", recruiterRouter);

module.exports = router;
