const express = require("express");
const router = express.Router();

const addFromAPI = require("./services/addFromAPI");
const getAllNews = require("./services/getAll");
const addNews = require("./services/add");
const editNews = require("./services/edit");
const removeNews = require("./services/remove");
const searchNews = require("./services/search");

router.post("/add-from-API", async (req, res) => {
  await addFromAPI(req, res);
});

router.get("/get-all", async (req, res) => {
  await getAllNews(req, res);
});

router.post("/addnews", async (req, res) => {
  await addNews(req, res);
});

router.put("/editnews", async (req, res) => {
  await editNews(req, res);
});

router.delete("/removenews", async (req, res) => {
  await removeNews(req, res);
});

router.get("/search", async (req, res) => {
  await searchNews(req, res);
});

module.exports = router;
