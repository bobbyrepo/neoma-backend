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
const blogsRoute = require("./modules/blogs/router");
require("./database").connect();

app.use("/api/users", usersRoute);
app.use("/api/blogs", authenticateToken, blogsRoute);

app.get("/api", (req, res) => {
  res.send("Api Working!");
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userAuth) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userAuth = userAuth;
    next();
  });
}

app.listen(process.env.PORT, function () {
  console.log("Server running on http://localhost:" + process.env.PORT);
});
