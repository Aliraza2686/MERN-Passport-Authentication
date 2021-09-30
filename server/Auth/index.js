const passport = require("passport");
const User = require("../models/user");

//Serialize user with passport using hes/her email
passport.serializeUser(function (email, done) {
  done(null, email);
});

//Deserialize user with passport using hes/her email
passport.deserializeUser(function (email, done) {
  User.findOne({email}, (err, user) => {
     done(null, user)
  })
});

//Requiring Login - Register strategy files
const LoginStrategy = require("./LoginStrategy");
const RegisterStrategy = require("./RegisterStrategy");
//Using the above
passport.use("local-login", LoginStrategy);
passport.use("local-register", RegisterStrategy);

module.exports = passport;
