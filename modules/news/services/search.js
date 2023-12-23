const newsModel = require("../model");

async function searchBlog(req, res) {
  const searchString = req.query.search;

  if (!searchString) {
    return res.json({ message: "Search is empty" });
  }
  try {
    const news = await newsModel.find({ title: { $regex: searchString } });

    if (!news) {
      return res.status(404).json({ message: "No such News" });
    }

    return res.status(200).json({
      message: "News you requested",
      news: news,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, message: "error" });
  }
}
module.exports = searchBlog;
