const blogModel = require("../model");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

async function removeblog(req, res) {
  if (!ObjectId.isValid(req.query.id)) {
    const dummy = await fetch(`https://dummyjson.com/posts/${req.query.id}`);
    const dummyBlog = await dummy.json();
    console.log(dummyBlog);
    if (!dummyBlog.id) {
      return res.status(404).json({ message: "blog not found" });
    } else {
      return res.json({ message: "Not your Blog" });
    }
  }

  try {
    const _id = new ObjectId(req.query.id);
    const blog = await blogModel.findByIdAndDelete({ _id: _id });

    if (blog.userId != req.userAuth.id) {
      return res.json({ message: "Not your Blog" });
    }

    return res.status(200).send({
      code: 200,
      message: "blog deleted",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the blog" });
  }
}

module.exports = removeblog;
