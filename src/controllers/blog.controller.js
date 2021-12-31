const mongoose = require("mongoose")
const Blog = require('../models/blog.model')



const getAllBlogs = async (req,res) => {
    try {
        const doc = await Blog.find({})
        res.status(200).json(doc)
    } catch (e) {
    console.log(e) 
    }
}

const getOneBlog = async (req,res) => {
    try {
        const doc = await Blog.findById(req.params.id).exec()
        res.status(200).json(doc)
    } catch (e) {
    console.log(e)
    }
}


const createBlog = async (req,res) =>{}









const constroller = {
    getAllBlogs: getAllBlogs,
    getOneBlog: getOneBlog
}


module.exports = constroller