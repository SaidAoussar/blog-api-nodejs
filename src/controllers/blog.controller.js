const mongoose = require("mongoose")
const Blog = require('../models/blog.model')



const getAllBlogs = async (req,res) => {
    try {
        const docs = await Blog.find({})
        res.status(200).json(docs)
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

const createBlog = async (req,res)=>{
    try {
        const doc = await Blog.create({
            title: req.body.title,
            body: req.body.body,
            postTime: Date.now(),
            tags: req.body.tags,
            author: req.user._id
        })
        res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}

const removeBlog = async (req,res)=>{
    try {
        const doc = await Blog.findOneAndRemove({
            _id: req.params.id,
            author: req.user._id
        })
        res.status(200).json(doc)
    } catch (e) {
       res.status(400).json(e) 
    }
}
const updateBlog = async (req,res)=>{
    try {
        const doc = await Blog.findOneAndUpdate({
            _id: req.body._id,
            author: req.user._id
        },
        req.body,
        { new: true })

        res.status(200).json(doc)
        
    } catch (e) {
        res.status(400).json(e)
    }
}

const allBlogsOfUser = async (req,res) =>{
    try {
        const docs = await Blog.find({author: req.params.id})
        res.status(200).json(docs)
    } catch (e) {
       res.status(400).json(e) 
    }
}


module.exports.getAllBlogs = getAllBlogs
module.exports.getOneBlog = getOneBlog
module.exports.createBlog = createBlog
module.exports.removeBlog = removeBlog
module.exports.updateBlog = updateBlog
module.exports.allBlogsOfUser = allBlogsOfUser