const { create } = require("../models/users/company.model");
const usersModels = require("../models/users/users.models");
const companyModel = require("../models/users/company.model");

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "HDYHHSY6";

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        usersModels.findOne({ _id: jwt_payload.id }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          companyModel.findOne({ _id: jwt_payload.id }, function (err, company) {
                if (err) {
                  return done(err, false);
                }
                if (company) {
                  return done(null, company);
                } else {
                  return done(null, false);
                  // or you could create a new account
                }
              });
        }
      });
    })
  );
};
