const express = require('express');
const { register, login, getUser } = require('./user.controllers');
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/:id', getUser);

module.exports = userRouter;
