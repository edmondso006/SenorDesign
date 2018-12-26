const User = require('./../database/models/User');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('./../database/validation/register');
const validateLoginInput = require('./../database/validation/login');


router.post('/register', function(req, res){
  //Input validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }

  //Checking to see if the email is already asoociated with a user in the db
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if(user){
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      //Email doesn't exist so we can create a new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      //Creating a slt to be used with hashing the password
      bcrypt.genSalt(10, (err, salt) => {
        if(err){
          console.log('bcrypt error Generating Salt: ' + err);
        }else {
          //Hash the users password and store that in the db
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
              console.log('bcrypt error 2 Generating Hash: ' + err);
            }else {
              newUser.password = hash;
              newUser.save()
                //After we save the user send user JSON object to the front end
                .then((user) => {
                  res.json(user);
                });
            }
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if(!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find the user that is associated with the given email from the input form
  User.findOne({email})
    .then((user) => {
      if(!user){
        errors.email = 'User not found';
        return res.status(400).json(errors);
      }
      //Comparing the users given password to the hashed password in db
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if(isMatch){
            //If there is a match sign a JWT token with the users information
            const payload = {
              id: user.id,
              name: user.name,
            }
            jwt.sign(payload, 'secret', { expiresIn: 3600}, (err, token) => {
              if(err){
                console.error('Error in token: ', err);
              }else {
                res.json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            });
          }else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});


//Only users that have a JWT should be able to view this GET route
router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    emai: req.user.email
  });
});

module.exports = router;