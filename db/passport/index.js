const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Admin, Client, Recruiter } = require("../models");
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt
const jwtSecret = require("./jwtConfig")

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

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      Recruiter.findOne({
        where: {
          email: jwt_payload.id,
        },
      }).then(user => {
        if (user) {
          console.log('user found in db in passport');
          // note the return removed with passport JWT - add this return for passport local
          done(null, user);
        } else {
          console.log('user not found in db');
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  }),
);

passport.serializeUser((user, done) => done(null, `${user.type} ${user.id}`));

passport.deserializeUser((savedParam, done) => {
  const [uType, uId] = savedParam.split(" ");

  switch (uType) {
    case "admin":
      Admin.findByPk(uId).then(user => done(null, user));
      break;

    case "recruiter":
      Recruiter.findByPk(uId).then(user => done(null, user));
      break;

    case "client":
      Client.findByPk(uId).then(user => done(null, user));
      break;
  }
});

module.exports = passport;
