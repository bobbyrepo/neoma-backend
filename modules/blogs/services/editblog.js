const blogModel = require("../model");
const { ObjectId } = require("mongoose").Types;

async function editBlog(req, res) {
  const _id = req.query.id;
  const updatedTask = req.body;

  if (!ObjectId.isValid(_id)) {
    const dummy = await fetch(`https://dummyjson.com/posts/${_id}`);
    const dummyBlog = await dummy.json();
    console.log(dummyBlog);
    if (!dummyBlog.id) {
      return res.status(404).json({ message: "blog not found" });
    } else {
      return res.json({ message: "Not your Blog" });
    }
  }

  try {
    const blog = await blogModel.findOne({ _id: _id });

    if (!blog) {
      return res.status(404).json({ message: "blog not found" });
    }

    if (blog.userId != req.userAuth.id) {
      return res.json({ message: "Not your Blog" });
    }

    const updatedTaskData = { ...blog, ...updatedTask };

    blog.set(updatedTaskData);
    await blog.save();

    return res.status(200).json({
      message: "Blog updated successfully",
      blog: blog,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, message: "error getting the blog" });
  }
}

module.exports = editBlog;
