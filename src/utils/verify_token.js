const jwt = require("jsonwebtoken")


module.exports = (req,res,next)=>{

    const token = req.header('auth-token');
    if(!token) return res.status(400).json({message: "invalid token"})

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (err) {
        res.status(400).json({
            message: "Invalid token"
        }) 
    }
    

}