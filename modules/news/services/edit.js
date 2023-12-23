const newsModel = require("../model");

async function editNews(req, res) {
  const _id = req.query.id;
  const updatedNews = req.body;

  try {
    const news = await newsModel.findOne({ _id: _id });

    if (!news) {
      return res.status(404).json({ message: "news not found" });
    }

    const updatedNewsData = { ...news, ...updatedNews };

    news.set(updatedNewsData);
    await news.save();

    return res.status(200).json({
      message: "news updated successfully",
      news: news,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ code: 400, message: "error getting the news" });
  }
}

module.exports = editNews;
