//This is to valid the data from the register user
//input.

const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data){
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if(!Validator.isLength(data.name, { min: 2, max: 30})){
    errors.name = 'Name has to be between 2 and 30 characters';
  }

  if(!Validator.isEmpty(data.name)){
    errors.name = 'Name is required';
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'Please enter a valid email';
  }

  if(!Validator.isEmpty(data.password)){
    errors.password = 'Password is required';
  }

  if(!Validator.isLength(data.password_confirm, { min: 6, max: 30 })){
    errors.password_confirm = 'Password must be between 6 and 30 charactesr';
  }

  if(!Validator.equals(data.password, data.password_confirm)){
    errors.password_confirm = 'Passwords do not match';
  }

  if(Validator.isEmpty(data.password_confirm)){
    errors.password_confirm = 'Please confirm password';
  }

  return {
    errors,
    isValid: isEmpty(error)
  }
}