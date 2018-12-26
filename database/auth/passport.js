//This fucnctions uses the JWT (JSON Web Token) and 
//finds the user that it is associated with
//A Strategy is a way of authentication

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = (passport) => {
  passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then((user) => {
        if(user){
          return done(null, user);
        }

        return done(null, false);
      })
      .catch((err) => {
        console.log(err);
      });
  }));
}