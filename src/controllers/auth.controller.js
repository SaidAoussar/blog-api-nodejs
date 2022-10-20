const User = require("../models/user.model");
const { registerValidation, loginValidation } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword
  });

  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  //check email
  const user = await User.findOne({ email: req.body.email })
    .select("+password")
    .exec();
  if (!user) return res.status(400).json({ message: "Email not exist" });

  //check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ message: "invalid password" });

  //token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token: token,
    updatedAt: user.updatedAt
  });
  /* blog 2
  res
    .header("auth-token", token)
    .status(200)
    .json({
      token: token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
    */
};

const isAuthenticated = async (req, res) => {
  try {
    const doc = await User.findById(req.user._id, ["email", "username"]);
    res.status(200).json({
      ...doc._doc,
      isAuth: true
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.register = register;
module.exports.login = login;
module.exports.isAuthenticated = isAuthenticated;
