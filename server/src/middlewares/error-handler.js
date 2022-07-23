const { StatusCodes } = require('http-status-codes');

function errorHandlerMiddleware (err, req, res, next) {
  console.log(err)
  let customError = {
    // set default
    errors: err.errors || undefined,
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    errorMessage: err.message || 'Something went wrong try again later',
  };
  if (err.name === 'ValidationError') {
    customError.errorMessage = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.errorMessage = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === 'CastError') {
    customError.errorMessage = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({status: false, errorMessage: customError.errorMessage, errors:customError.errors });
};

module.exports = errorHandlerMiddleware;
