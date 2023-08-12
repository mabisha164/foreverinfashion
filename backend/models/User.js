const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifytoken: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  userType: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
