//This is to valid the data from the login user
//input.

const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if(!Validator.isEmail(data.email)){
    errors.email = 'Invalid Email';
  }

  if(!Validator.isEmpty(data.email)){
    errors.email = 'Email is requried';
  }

  if(!Validator.isLength(data.password)){
    errors.password = 'Password must have 6 characters';
  }

  if(Validator.isEmpty(data.password)){
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}