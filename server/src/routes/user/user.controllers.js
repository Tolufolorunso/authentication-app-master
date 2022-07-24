const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.models');
const CustomError = require('../../errors');
const { createJWT } = require('../../utils');
const { findByIdAndUpdate } = require('../../models/user.models');
const deleteImg = require('../../utils/deleteImage');

const register = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new CustomError.BadRequestError('User already exist');
  }

  await User.create({ email, password });

  res.status(StatusCodes.CREATED).json({
    status: true,
    message: `User created successfully`,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.BadRequestError('invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.BadRequestError('invalid credentials');
  }

  const token = createJWT({
    payload: {
      id: user._id,
      email: user.email,
    },
  });

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'User logged in successfully',
    user,
    token,
  });
};

const getUser = async (req, res) => {
  const { userID } = req.params;
  const userProfile = await User.findById(userID);

  if (!userProfile) {
    throw new CustomError.NotFoundError('User not found');
  }

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'User is fetched',
    user: userProfile,
  });
};

const updateProfile = async (req, res) => {
  const { userID } = req.params;
  const { phone, name, bio } = req.body;

  const userProfile = await User.findOne({ _id: userID });

  if (!userProfile) {
    throw new CustomError.NotFoundError('User not found');
  }

  if (phone) {
    userProfile.phone = phone;
  }

  if (name) {
    userProfile.name = name;
  }

  if (bio) {
    userProfile.bio = bio;
  }

  await userProfile.save();

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Profile updated successfully',
    user: userProfile,
  });
};

const uploadProfileImage = async (req, res) => {
  const { userID } = req.params;
  let oldImageUrl;

  const userProfile = await User.findById(userID);

  if (!userProfile) {
    throw new CustomError.NotFoundError('User not found');
  }

  if (!req.file) {
    return res.status(StatusCodes.OK).json({
      status: true,
      message: 'Nothing here',
      image: userProfile.image,
    });
  } else {
    oldImageUrl = userProfile.image;
  }

  // deleteImg({ imageLocation: '', res });

  console.log(userProfile);

  res.status(StatusCodes.OK).json({
    status: true,
    message: 'Image uploaded successfully',
    image: userProfile.image,
  });
};

module.exports = {
  register,
  login,
  getUser,
  updateProfile,
  uploadProfileImage,
};
