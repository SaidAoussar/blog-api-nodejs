const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getOneBlog,
  createBlog,
  removeBlog,
  updateBlog,
  allBlogsOfUser
} = require("../controllers/blog.controller");
const { paginatedResults } = require("../utils/pagination");
const verify = require("../utils/verify_token");
const Blog = require("../models/blog.model");

//router.get("/", getAllBlogs);
router.get("/", paginatedResults(Blog), getAllBlogs);
router.get("/:id", getOneBlog);
router.post("/", verify, createBlog);
router.delete("/:id", verify, removeBlog);
router.put("/", verify, updateBlog);
router.get("/user/:id", allBlogsOfUser);

module.exports = router;
