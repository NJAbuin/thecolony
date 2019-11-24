const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../models/Admin");

passport.use(
  "admin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      Admin.findOne({
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
<<<<<<< HEAD

)


passport.serializeUser(function (user, done) {
    done(null, user.id);
=======
        .catch(console.error);
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user.id);
>>>>>>> 5011cf9ef7b0f12150b2ff6e838c5fbbf2ec80e8
});
passport.deserializeUser(function(id, done) {
  Admin.findByPk(id).then(user => done(null, user));
});

module.exports = passport;
