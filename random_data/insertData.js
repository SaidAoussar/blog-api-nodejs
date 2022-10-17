const User = require("../src/models/user.model");
const Blog = require("../src/models/blog.model");
const Comment = require("../src/models/comment.model");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");
const addUser = async () => {
  try {
    const doc = await User.create([
      {
        username: "Said Aoussr",
        email: "said@gmail.com",
        password: "1234"
      },
      {
        username: "salah Aoussr",
        email: "salah@gmail.com",
        password: "1234"
      },
      {
        username: "wriccardini0",
        email: "ngush0@nifty.com",
        password: "1234"
      },
      {
        username: "mrosekilly1",
        email: "slinnemann1@prweb.com",
        password: "1234"
      },
      {
        username: "psawter2",
        email: "achallicombe2@arstechnica.com",
        password: "1234"
      },
      {
        username: "cdickie3",
        email: "skezar3@house.gov",
        password: "1234"
      },
      {
        username: "chawgood4",
        email: "nvaleri4@ted.com",
        password: "1234"
      },
      {
        username: "mspringall5",
        email: "lpendleberry5@walmart.com",
        password: "1234"
      },
      {
        username: "fbrandrick6",
        email: "skingcote6@go.com",
        password: "1234"
      },
      {
        username: "lhaywood7",
        email: "ngittis7@soup.io",
        password: "1234"
      },
      {
        username: "lheppenspall8",
        email: "ijahnke8@gov.uk",
        password: "1234"
      },
      {
        username: "tchittenden9",
        email: "bronayne9@vk.com",
        password: "1234"
      }
    ]);
  } catch (e) {
    console.error(e);
  }
};

const addBlogs = async () => {
  try {
    const doc = await Blog.create(blogData);
  } catch (e) {
    console.error(e);
  }
};

const addComments = async () => {
  try {
    const doc = await Comment.create(commentData);
  } catch (e) {
    console.error(e);
  }
};

const data = {
  addUser: addUser,
  addBlogs: addBlogs,
  addComments: addComments
};

module.exports = data;
