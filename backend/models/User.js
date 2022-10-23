const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      unique: true,
    },
    name:{
      type: String,
      minlength: 3,
      required: false,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    birthday: {
      type: Date,
    },
    class: {
      type: String,
      required: false,
      minlength: 8,
      maxlength: 8,
      unique: false,
    },
    mssv: {
      type: String,
      required: false

    },
    imageProfile: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
