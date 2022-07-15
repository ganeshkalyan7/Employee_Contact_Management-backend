const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    //userexists or not
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      res.status(500).json({ msg: "user already exist!!!" });
    }
    //encrypt of password
    const salt = await bcrypt.genSalt(10);
    hashedpassword = await bcrypt.hash(req.body.password, salt);

    const newuser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedpassword,
    });
    var response = await newuser.save();
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });

    console.log(existUser);
    //email validation
    if (!existUser) {
      res.status(500).json({ msg: "email doesnst exist!!!!! please signUp" });
    }
    //password validation
    const isValid = await bcrypt.compare(req.body.password, existUser.password);
    console.log("hello");
    if (!isValid) {
      res.status(404).json({ msg: "password invalid" });
    }
    //if email and password corect than generate password
    var token = jwt.sign({ existUser }, "secret_key", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
  }
};

//delete user
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "deleted user successfully......" });
  } catch (err) {
    console.log(err);
  }
};

//getting users
exports.getUsers = async (req, res, next) => {
  try {
    const getuser = await User.find();
    res.status(400).json(getuser);
  } catch (err) {
    console.log(err);
  }
};
