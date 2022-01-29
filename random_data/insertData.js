
const User = require("../src/models/user.model")
const Blog = require("../src/models/blog.model")
const Comment = require("../src/models/comment.model")
const blogData = require("./blogData.json")
const commentData = require("./commentData.json")
const addUser = async ()=>{
    try {
        const doc = await User.create([
            {
              username: "Said Aoussr",
              email: "said@gmail.com"  
            },
            {
              username: "salah Aoussr",
              email: "salah@gmail.com"  
            },
            {
            "username": "wriccardini0",
            "email": "ngush0@nifty.com"
            }, {
            "username": "mrosekilly1",
            "email": "slinnemann1@prweb.com"
            }, {
            "username": "psawter2",
            "email": "achallicombe2@arstechnica.com"
            }, {
            "username": "cdickie3",
            "email": "skezar3@house.gov"
            }, {
            "username": "chawgood4",
            "email": "nvaleri4@ted.com"
            }, {
            "username": "mspringall5",
            "email": "lpendleberry5@walmart.com"
            }, {
            "username": "fbrandrick6",
            "email": "skingcote6@go.com"
            }, {
            "username": "lhaywood7",
            "email": "ngittis7@soup.io"
            }, {
            "username": "lheppenspall8",
            "email": "ijahnke8@gov.uk"
            }, {
            "username": "tchittenden9",
            "email": "bronayne9@vk.com"
            }
        ])
        } catch (e) {
        console.error(e)
        }
}

const addBlogs = async ()=>{
    try {
        const doc = await Blog.create(blogData)
        } catch (e) {
        console.error(e)
        }
}

const addComments = async ()=>{
  try {
      const doc = await Comment.create(commentData)
      } catch (e) {
      console.error(e)
      }
}

const data = {
    addUser : addUser,
    addBlogs: addBlogs,
    addComments: addComments
}




module.exports = data




