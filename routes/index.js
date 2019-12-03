const router = require("express").Router();
const seed = require("./seed");
const meRouter = require("./me");
const adminRouter = require("./admin");
const publicRouter = require("./public")
const sessionRouter = require("./session")

const recruiterRouter = require("./recruiter");

router.use("/seed", seed);
router.use("/me", meRouter);

//REGISTER, LOG IN, LOGOUT
router.use("/session", sessionRouter)

//router de admin con acceso a CLIENTES, RECRUITERS, Y OTROS ADMINS
router.use("/admin", adminRouter);

//router de CANDIDATOS Y BUSQUEDAS

router.use("/", publicRouter)

/* 
router.use("/recruiter", recruiterRouter);
*/


module.exports = router;
