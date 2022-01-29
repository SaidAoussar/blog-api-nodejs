const mongoose = require("mongoose")
const { findById } = require("../models/user.model")
const User = require("../models/user.model")



const getAllUsers = async (req,res) =>{
    try {
        const docs = await User.find({})
        res.status(200).json(docs)
    } catch (e) {
        res.status(400).json(e)
    }
}
const getUser = async (req, res) => {
    try {
       const doc = await User.findById(req.params.id)
       res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}
const removeUser = async (req, res) => {
    try {
        const doc = await User.findOneAndRemove({
            _id : req.params.id
        })
        res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}

const updateUser = async (req,res) =>{
    try {
       const doc = await User.findOneAndUpdate({
           _id:req.params.id
       },
       req.body,
       {new:true}
       )
       res.status(200).json(doc)
    } catch (e) {
        res.status(400).json(e)
    }
}



module.exports.getAllUsers = getAllUsers
module.exports.getUser = getUser
module.exports.removeUser = removeUser
module.exports.updateUser = updateUser