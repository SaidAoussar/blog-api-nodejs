const express = require('express')
const router = express.Router()
const { getAllBlogs, getOneBlog, createBlog, removeBlog, updateBlog } = require("../controllers/blog.controller")
const verify = require("../utils/verify_token")


router.get('/',getAllBlogs)
router.get('/:id',getOneBlog)
router.post('/',createBlog)
router.delete('/:id',removeBlog)
router.put('/',updateBlog)



module.exports = router
