const newsModel = require("../model");

async function addFromAPI(req, res) {
  try {
    const dummyNews = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=71896d966a5e4185b430dabbcddee38a`
    );

    if (!dummyNews.ok) {
      throw new Error("Error fetching news");
    }

    const news = await dummyNews.json();

    const insertedNews = await newsModel.insertMany([...news.articles]);

    res.status(200).json({
      code: 200,
      message: "news found",
      news: news.articles,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the news" });
  }
}

module.exports = addFromAPI;
