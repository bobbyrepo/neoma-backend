const blogModel = require("../model");

async function getAllBlogs(req, res) {
  try {
    const dummy = await fetch(
      "https://dummyjson.com/posts?select=userId,title,body"
    );
    const myBlogs = await blogModel.find({});

    if (!dummy.ok) {
      throw new Error("Error fetching blogs");
    }

    const dummyBlogs = await dummy.json();
    res.status(200).json({
      code: 200,
      message: "blogs found",
      userId: req.userAuth.id,
      // allBlogs: allBlogs,
      allBlogs: [...myBlogs, ...dummyBlogs.posts],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the tasks" });
  }
}

module.exports = getAllBlogs;
