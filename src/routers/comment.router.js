const express = require("express")
const { getCommentsOfBlog, getCommentsOfUser,getOneComment, createComment, removeComment, updateComment } = require("../controllers/comment.controller")

const router = express.Router()


// comment/blog/i:d method:get
router.get("/blog/:id",getCommentsOfBlog)

router.get("/user/:id",getCommentsOfUser)

router.get("/:id",getOneComment)
router.post("/",createComment)
router.delete("/:id",removeComment)
router.put("/:id",updateComment)




module.exports = router