const router = require("express").Router();
const seed = require("./seed");
const meRouter = require("./me");
const adminRouter = require("./admin");
const publicRouter = require("./public")
const sessionRouter = require("./session")

const clientRouter = require("./client");
const recruiterRouter = require("./recruiter");
const candidatesRouter = require('./candidates')

router.use("/seed", seed);
router.use("/me", meRouter);

//REGISTER, LOG IN, LOGOUT
router.use("/session", sessionRouter)

//router de admin (acceso a clientes, recruiters y otros admins)
router.use("/admin", adminRouter);

//router de todos (admin, client, recruiter) con acceso a candidatos y busquedas

/* router.use("/", publicRouter) */

/* router.use("/client", clientRouter);
router.use("/recruiter", recruiterRouter);
router.use("/candidates", candidatesRouter); 
 */




module.exports = router;
