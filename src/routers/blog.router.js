const express = require('express')
const router = express.Router()
const controller = require("../controllers/blog.controller")
const verify = require("../utils/verify_token")


router.get('/',verify,controller.getAllBlogs)
router.get('/:id',controller.getOneBlog)



module.exports = router
