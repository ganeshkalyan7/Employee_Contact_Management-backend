const contactShema = require("../model/contact");

exports.createContact = async (req, res, next) => {
  try {
    const Contact = await contactShema.create(req.body);
    res.status(201).json(Contact);
  } catch (err) {
    console.log(err);
  }
};
exports.getContacts = async (req, res, next) => {
  try {
    const getData = await contactShema.find();
    res.status(200).json(getData);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    await contactShema.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "deleted contact successfully...." });
  } catch (err) {
    console.log(err);
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const Contact = await contactShema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json(Contact);
  } catch (err) {
    console.log(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const getData = await contactShema.findById(req.params.id);
    res.status(200).json(getData);
  } catch (err) {
    console.log(err);
  }
};
