const mongoose = require("mongoose");

const newsModel = new mongoose.Schema({
  author: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,
  content: mongoose.Schema.Types.String,
  url: mongoose.Schema.Types.String,
  urlToImage: mongoose.Schema.Types.String,
  publishedAt: mongoose.Schema.Types.String,
  source: {
    id: mongoose.Schema.Types.String,
    name: mongoose.Schema.Types.String,
  },
  category: {
    type: [mongoose.Schema.Types.String],
    default: [],
  },
});

module.exports = mongoose.model("news", newsModel);
