const newsModel = require("../model");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

async function removenews(req, res) {
  try {
    const _id = new ObjectId(req.query.id);
    const news = await newsModel.findByIdAndDelete({ _id: _id });

    return res.status(200).send({
      code: 200,
      message: "news deleted",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ code: 400, message: "error getting the news" });
  }
}

module.exports = removenews;
