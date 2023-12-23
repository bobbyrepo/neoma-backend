const newsModel = require("../model");

async function getAllNews(req, res) {
  try {
    const news = await newsModel.find({});

    res.status(200).json({
      code: 200,
      message: "news found",
      count: news.length,
      news: news,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the news" });
  }
}

module.exports = getAllNews;
