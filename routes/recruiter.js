const router = require("express").Router();
const Recruiter = require("../db/models/Recruiter");
const passport = require("../db/passport/passportRecruiter");

router.post("/register", function (req, res) {
    Recruiter.create(req.body).then(recruiter =>
        req.login(recruiter, function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send(client);
            }
        })
    );
});

router.post("/login", passport.authenticate("recruiter"), function (req, res) {
    console.log(req.body);
    res.send(req.user);
});

router.get("/logout", function (req, res) {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
