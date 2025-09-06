const User = require('../models/User');

exports.register = async (data) => {
  // TODO: Save user and send verification email
  return { message: 'User registered (mock)' };
};

exports.login = async (data) => {
  // TODO: Authenticate user
  return { message: 'User logged in (mock)' };
};

exports.verifyEmail = async (token) => {
  // TODO: Verify email using token
  return { message: 'Email verified (mock)' };
};
