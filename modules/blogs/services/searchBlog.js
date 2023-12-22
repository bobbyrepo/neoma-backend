const blogModel = require("../model");

async function searchBlog(req, res) {
  const searchString = req.query.search;

  if (!searchString) {
    return res.json({ message: "Search is empty" });
  }
  try {
    const blog = await blogModel.find({
      $or: [
        { title: { $regex: searchString } },
        { body: { $regex: searchString } },
      ],
    });
    const dummy = await fetch(
      `https://dummyjson.com/posts/search?q=${searchString}&select=userId,title,body`
    );

    const dummyBlogs = await dummy.json();

    if (!blog) {
      return res.status(404).json({ message: "No such Blog" });
    }

    return res.status(200).json({
      message: "Blog you requested",
      blog: [...blog, ...dummyBlogs.posts],
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, message: "error" });
  }
}
module.exports = searchBlog;
