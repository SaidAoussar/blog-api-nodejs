const express = require('express')
const router = express.Router()
const controller = require("../controllers/blog.controller")


router.get('/',controller.getAllBlogs)



module.exports = router
