const express = require("express");
const router = express.Router();

const getAllBlogs = require("./services/getAll");
const searchBlog = require("./services/searchBlog");
const addBlog = require("./services/addBlog");
const editBlog = require("./services/editblog");
const removeblog = require("./services/removeBlog");

router.get("/get-all", async (req, res) => {
  await getAllBlogs(req, res);
});

router.get("/search", async (req, res) => {
  await searchBlog(req, res);
});

router.post("/add", async (req, res) => {
  await addBlog(req, res);
});

router.put("/edit", async (req, res) => {
  await editBlog(req, res);
});
router.delete("/remove", async (req, res) => {
  await removeblog(req, res);
});

module.exports = router;
