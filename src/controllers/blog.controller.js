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








const constroller = {
    getAllBlogs: getAllBlogs
}


module.exports = constroller