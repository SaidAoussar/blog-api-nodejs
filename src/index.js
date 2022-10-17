const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//dotenv
dotenv.config();

// router
const blogRouter = require("./routers/blog.router");
const commentRouter = require("./routers/comment.router");
const authRouter = require("./routers/auth.route");
const userRouter = require("./routers/user.router");
// data
const insertData = require("../random_data/insertData");

// insertData.addUser();
//insertData.addBlogs();

const app = express();
//morgan
app.use(morgan("dev"));
//cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//static file that can access fro url
app.use(express.static("uploads"));

//connect db
mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("connecting to db");
  }
});

app.get("/", (req, res) => {
  res.send({ data: "hello world" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ data: "the request is passed" });
});
//auth router
app.use(authRouter);
// blog router
app.use("/blog", blogRouter);
// comment router
app.use("/comment", commentRouter);
// user router
app.use("/user", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log("server runing in " + port);
});

// mongo db online config
// user name : said
// password : kUiAzFa6z9fXujmJ
