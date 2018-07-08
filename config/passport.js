const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload, next) => {
        User.getUserById(jwt_payload.data._id, (err, user) => {
            if (err){
                return next(err, false);
            }if (user){
                return next(null, user);

            }else{
                return next (null, false);
            }
        });
    }));
    // let opts = {};
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    // opts.secretOrKey = config.secret;
    // passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    //     User.getUserById(jwt_payload._id, function(err, dashboard) {
    //         if (err) {
    //             return done(err, false);
    //         }
    //         if (dashboard) {
    //             done(null, dashboard);
    //         } else {
    //             done(null, false);
    //             // or you could create a new account
    //         }
    //     });
    // }));

}


