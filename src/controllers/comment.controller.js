const mongoose = require("mongoose")
const Comment = require("../models/comment.model")



//comment/blog/:id
// get all comment of specific blog
const getCommentsOfBlog = async (req,res) =>{
    try {
        const docs = await Comment.find({
            blogId : req.params.id
        })

        res.status(200).json(docs)
    } catch (e) {
       res.status(400).json(e) 
    }
}
// comment/user/:id
// get all comment of specific user
const getCommentsOfUser = async (req, res) => {
    try {
        const docs = await Comment.find({author: req.params.id})
        res.status(200).json(docs)        
    } catch (e) {
       res.status(400).json(e) 
    }
}

// comment/:id
const getOneComment = async (req,res) =>{
    try {
        const doc = await Comment.findById(req.params.id)
        res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}

// comment/
const createComment = async (req,res)=>{
    try {
        const doc = await Comment.create({
            body: req.body.body,
            postTime: Date.now(),
            author: req.user._id,
            blogId: req.body.blogId
        })
        res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }

}
// comment/:id  method=delete
const removeComment = async (req,res)=>{
    try {
       const doc = await Comment.findOneAndRemove({
           _id: req.params.id
       })

       if(!doc){
           res.status(400).end()
       }
       res.status(200).json(doc)
    } catch (e) {
       res.status(400).json(e)
    }
}

// comment/:id    method=put
const updateComment = async (req,res)=>{
    try {
        const doc = await Comment.findOneAndUpdate({
            _id: req.params.id
        },
        req.body,
        { new:true })

        res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}


module.exports.getCommentsOfBlog = getCommentsOfBlog
module.exports.getOneComment = getOneComment
module.exports.createComment = createComment
module.exports.removeComment = removeComment
module.exports.updateComment = updateComment
module.exports.getCommentsOfUser = getCommentsOfUser