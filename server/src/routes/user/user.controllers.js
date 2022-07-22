const { StatusCodes } = require('http-status-codes');

const register = (req, res) => {
  res.status(StatusCodes.OK).json(req.body);
};

const login = (req, res) => {
  res.status(StatusCodes.OK).json(req.body);
};

const getUser = (req, res) => {
  res.status(StatusCodes.OK).json(req.params);
};

module.exports = {
  register,
  login,
  getUser,
};
