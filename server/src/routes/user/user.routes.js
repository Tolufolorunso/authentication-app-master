const express = require('express');

const { upload } = require('../../utils');

const {
  register,
  login,
  getUser,
  updateProfile,
  uploadProfileImage,
} = require('./user.controllers');
const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/:userID', getUser);
userRouter.patch('/:userID', updateProfile);
userRouter.patch('/:userID/image', upload.single('image'), uploadProfileImage);

module.exports = userRouter;
