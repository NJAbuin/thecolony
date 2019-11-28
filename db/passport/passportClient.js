const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Client = require("../models/Client");

passport.use(
  "client",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
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

passport.serializeUser(function(user, done) {
  console.log(passport.deserializeUser.toString());
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Client.findByPk(id).then(user => done(null, user));
});

module.exports = passport;
