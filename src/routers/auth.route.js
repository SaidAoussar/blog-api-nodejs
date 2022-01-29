const express = require('express')
const {register, login, isAuthenticated} = require("../controllers/auth.controller")
const router = express.Router()
const verify = require("../utils/verify_token")



router.post("/register",register)
router.post("/login",login)
router.get("/isAuthenticated",verify,isAuthenticated)





module.exports = router