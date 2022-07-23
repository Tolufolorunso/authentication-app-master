const CustomError = require('../errors');
const { isTokenValid } = require('../utils/jwt');
const { StatusCodes } = require("http-status-codes");
const User = require('../models/user.model')


const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
  try {
    const payload = isTokenValid({ token });
    console.log(payload.userId)
    // req.cur_user = await User.findById(payload.userId)
    req.user = { name: payload.name, userId: payload.userId, role: payload.role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid');
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'You do not have access to perform the operation!'
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorize
};
