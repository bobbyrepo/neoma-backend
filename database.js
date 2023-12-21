const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log("database connected successfully"))
    .catch((err) => {
      console.log("database connection failed, exiting now...");
      console.log(err);
      process.exit(1);
    });
};

module.exports = { connect };
