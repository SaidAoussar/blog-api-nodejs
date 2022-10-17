const express = require("express");
const multer = require("multer");
const {
  getAllUsers,
  getUser,
  removeUser,
  updateUser
} = require("../controllers/user.controller");
const router = express.Router();
const verify = require("../utils/verify_token");

// handle avatar of user
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    console.log("req", req.body);
    const extension = file.originalname.split(".").pop();
    cb(null, `${req.body._id}.${extension}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // accept file
    cb(null, true);
  } else {
    // reject file
    cb(new Error("image should be jpeg or png"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", removeUser);
router.put("/:id", upload.single("avatar"), updateUser);

module.exports = router;
