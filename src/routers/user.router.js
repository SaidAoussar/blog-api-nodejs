const express = require("express")
const {getAllUsers, getUser, removeUser, updateUser} = require("../controllers/user.controller")
const router = express.Router()
const verify = require("../utils/verify_token")


router.get("/",verify,getAllUsers)
router.get("/:id",getUser)
router.delete("/:id", removeUser)
router.put("/:id",verify,updateUser)



module.exports = router