const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../models/Admin");

passport.use(
    new LocalStrategy(function (email, password, done) {
        Admin.findOne({
            where: { email: email }
        })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: "Incorrect email." });
                }
                if (!user.validatePassword(password)) {
                    return done(null, false, { message: "Incorrect password." });
                }
                return done(null, user);
            })
            .catch(console.error);
    })
);


passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    Admin.findByPk(id).then(user => done(null, user));
});

module.exports = passport;
