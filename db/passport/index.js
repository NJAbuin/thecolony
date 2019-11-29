const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Admin, Client, Recruiter } = require("../models");

passport.use(
  "admin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, done) {
      Admin.findOne({
        where: { email: email }
      }).then(user => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false, {
            message: "Incorrect email or password."
          });
        }
        return done(null, user);
      });
    }
  )
);

passport.use(
  "client",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, done) {
      Client.findOne({
        where: { email: email }
      })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              message: "Incorrect email or password."
            });
          }
          return done(null, user);
        })
        .catch(console.error);
    }
  )
);

passport.use(
  "recruiter",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (email, password, done) {
      Recruiter.findOne({
        where: { email: email }
      })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              message: "Incorrect email or password."
            });
          }
          return done(null, user);
        })
        .catch(console.error);
    }
  )
);

passport.serializeUser((user, done) => done(null, `${user.type} ${user.id}`));

passport.deserializeUser((savedParam, done) => {
  const [uType, uId] = savedParam.split(" ");

  switch (uType) {
    case "Admin":
      Admin.findByPk(uId).then(user => done(null, user));
      break;

    case "Recruiter":
      Recruiter.findByPk(uId).then(user => done(null, user));
      break;

    case "Client":
      Client.findByPk(uId).then(user => done(null, user));
      break;
  }
});

module.exports = passport;
