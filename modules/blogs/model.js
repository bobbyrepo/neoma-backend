const mongoose = require("mongoose");

const blogModel = new mongoose.Schema({
  userId: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  body: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("blogs", blogModel);
