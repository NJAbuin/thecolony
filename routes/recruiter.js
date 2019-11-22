const router = require("express").Router();
const Recruiter = require("../db/models/Recruiter");
const Candidate = require("../db/models/Candidate")
const passport = require("../db/passport/passportRecruiter");


//register, login y logout

router.post("/register", function (req, res) {
  Recruiter.findOrCreate({ where: { email: req.body.email } })
    .then(([recruiter, created]) => {
      if (created) {
        req.login(recruiter, function (err) {
          if (err) {
            console.log(err);
          } else {
            res.send(recruiter);
          }
        }
        )
      } else {
        res.send("Este email ya esta registrado.")
      }
    }
    )
});

router.post("/login", passport.authenticate("recruiter"), function (req, res) {
  console.log(req.body);
  res.send(req.user);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200);
});


// agregar y editar candidatos

router.post("/candidatos", function (req, res) {
  Candidate.create(req.body).then(candidate => res.send(candidate))
})

router.put("/candidatos/edit/:id", function (req, res) {
  Candidate.findOne({ where: { id: req.params.id } })
    .then(candidate =>
      candidate.update({
        DNI: req.body.candidate.name,
        fullName: req.body.fullName,
        age: req.body.age,
        jobTitle: req.body.jobTitle,
        CV: req.body.CV,
        adress: req.body.adress,
        expectedSalary: req.body.expectedSalary
      })
    )
    .then(updatedCandidate => res.send(updatedCandidate));
})

module.exports = router;
