const bcrypt = require("bcryptjs");
const { findById } = require("../models/user.model");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const docs = await User.find({});
    res.status(200).json(docs);
  } catch (e) {
    res.status(400).json(e);
  }
};
const getUser = async (req, res) => {
  try {
    const doc = await User.findById(req.params.id);
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};
const removeUser = async (req, res) => {
  try {
    const doc = await User.findOneAndRemove({
      _id: req.params.id
    });
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

const updateUser = async (req, res) => {
  //hash password

  console.log(req.body, req.file);
  let data = {};
  if (req.body.password !== "") {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    data = {
      ...req.body,
      password: hashPassword,
      ...(req.file && { photo: req.file.filename })
    };
  } else {
    data = { ...req.body, ...(req.file && { photo: req.file.filename }) };
  }

  try {
    const doc = await User.findOneAndUpdate(
      {
        _id: req.params.id
      },
      data,
      { new: true }
    );
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.removeUser = removeUser;
module.exports.updateUser = updateUser;
