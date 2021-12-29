const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose  = require("mongoose")


const app = express()
//morgan
app.use(morgan('dev'))
//cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//mongodb://localhost:27017/

mongoose.connect("mongodb://localhost:27017/blog-api-db",(err)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log("connecting to db")
    }
})


app.get('/',(req,res)=>{
    res.send({data: "hello world"})

})


app.post('/',(req,res)=>{
    console.log(req.body)
    res.send({data: "the request is passed"})
})



const port = 3000
app.listen(port,()=>{
    console.log('server runing in '+port)
})

