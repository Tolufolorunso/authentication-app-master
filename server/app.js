require('dotenv').config();
require('express-async-errors');
const express = require('express');
const morgan = require('morgan');

const { StatusCodes } = require('http-status-codes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res, next) => {
  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Authentication App by devchallenges.io',
  });
});

module.exports = app;
