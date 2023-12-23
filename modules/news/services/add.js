const newsModel = require("../model");

async function addNews(req, res) {
  try {
    const newBlog = new newsModel({ ...req.body });
    const insertedTask = await newBlog.save();
    return res
      .status(201)
      .json({ code: 200, message: "news added", news: newBlog });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error adding the news" });
  }
}

module.exports = addNews;
