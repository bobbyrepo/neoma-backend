const blogModel = require("../model");
const { v4: uuidv4 } = require("uuid");

async function addBlog(req, res) {
  try {
    const newBlog = new blogModel({ ...req.body, userId: req.userAuth.id });
    const insertedTask = await newBlog.save();
    return res
      .status(201)
      .json({ code: 200, message: "Blog added", blog: newBlog });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error adding the task" });
  }
}

module.exports = addBlog;
