const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  experiance: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: String,
    required: true,
  },
});
const contact = mongoose.model("contactform", contactShema);
module.exports = contact;
