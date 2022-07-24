const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must be at most 50 characters long'],
  },
  phone: {
    type: String,
    minlength: [10, 'Phone number must be at least 10 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    minlength: [5, 'Email must be at least 5 characters'],
    maxlength: [255, 'Email must be less than 255 characters'],
    validator: [validator.isEmail, 'Invalid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [3, 'Password must be at least 3 characters long'],
  },
  bio: {
    type: String,
    maxlength: [255, 'Bio must be less than 255 characters'],
  },
  image: {
    type: String,
    default: 'https://image.com/imaje.jpg',
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (candiatePassword) {
  return await bcrypt.compare(candiatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
