const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstname: {
    type: String,
    minLength: 3,
    required: true,
  },
  lastname: {
    type: String,
    minLength: 3,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
