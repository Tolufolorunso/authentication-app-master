const mongoose = require('mongoose');

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
    minlength: [5, 'Email must be at least 5 characters'],
    maxlength: [255, 'Email must be less than 255 characters'],
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
  },
});

module.exports = mongoose.model('User', UserSchema);
