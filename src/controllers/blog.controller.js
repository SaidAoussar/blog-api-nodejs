const mongoose = require("mongoose");
const Blog = require("../models/blog.model");

const getAllBlogs = async (req, res) => {
  res.json(res.paginatedResults);

  // try {
  //   const docs = await Blog.find({});
  //   res.status(200).json(docs);
  // } catch (e) {
  //   console.log(e);
  // }

  //   const page =
  //     req.query.page && req.query.page > 0 ? parseInt(req.query.page) : 1;
  //   const pageSize = 10;

  //   const startIndex = (page - 1) * pageSize;
  //   const endIndex = page * pageSize;
  //   const result = {};

  //   //get total of item
  //   const totalItem = await Blog.count();
  //   result.totalPage = Math.ceil(totalItem / pageSize);
  //   result.totalItem = totalItem;

  //   if (endIndex < totalItem) {
  //     result.next = page + 1;
  //   }

  //   result.currentPage = page;
  //   if (startIndex > 0) {
  //     result.previous = page - 1;
  //   }

  //   try {
  //     result.items = await Blog.find({}).limit(pageSize).skip(startIndex);
  //     res.status(200).json(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
};

const getOneBlog = async (req, res) => {
  try {
    const doc = await Blog.findById(req.params.id).exec();
    res.status(200).json(doc);
  } catch (e) {
    console.log(e);
  }
};

const createBlog = async (req, res) => {
  try {
    const doc = await Blog.create({
      title: req.body.title,
      body: req.body.body,
      postTime: Date.now(),
      tags: req.body.tags,
      author: req.user._id
    });
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

const removeBlog = async (req, res) => {
  try {
    const doc = await Blog.findOneAndRemove({
      _id: req.params.id,
      author: req.user._id
    });
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};
const updateBlog = async (req, res) => {
  try {
    const doc = await Blog.findOneAndUpdate(
      {
        _id: req.body._id,
        author: req.user._id
      },
      req.body,
      { new: true }
    );

    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

const allBlogsOfUser = async (req, res) => {
  try {
    const docs = await Blog.find({ author: req.params.id });
    res.status(200).json(docs);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.getAllBlogs = getAllBlogs;
module.exports.getOneBlog = getOneBlog;
module.exports.createBlog = createBlog;
module.exports.removeBlog = removeBlog;
module.exports.updateBlog = updateBlog;
module.exports.allBlogsOfUser = allBlogsOfUser;
