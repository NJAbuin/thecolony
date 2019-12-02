const chalk = require('chalk')
const router = require("express").Router();
const { Candidate, Recruiter } = require('../db/models')

router.get("/:id", function (req, res) {
    //if (!req.user.permissions) return status(401).send(); TODO: WHEN ADMIN ACAN APPROVE, ADD THIS
    Candidate.findOne({
        where: {
            id: req.params.id,
            recruiterId: req.user.id
        }
    }).then(candidate => {
        console.log(candidate)
        res.send(candidate)
    }
    );
});

module.exports = router;