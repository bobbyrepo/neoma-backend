require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const usersRoute = require("./modules/users/router");
require("./database").connect();

app.use("/api/users", usersRoute);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

app.listen(process.env.PORT, function () {
  console.log("Server running on http://localhost:" + process.env.PORT);
});
