const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    photo: String
  },
  { timestamps: true }
);

userSchema.path("email").validate(async (email) => {
  const emailCount = await mongoose.models.user.countDocuments({ email });
  return !emailCount;
}, "Email already exist");

module.exports = mongoose.model("user", userSchema);
