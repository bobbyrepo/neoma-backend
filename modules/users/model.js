const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
});

module.exports = mongoose.model("users", userModel);
