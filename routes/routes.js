const express = require("express");
const router = express.Router();
const getData = require("../getData");
const getDataQuery = require("../getDataQuery");

router.get("/top-headlines", async (req, res) => {
  console.log(req.query);
  const { category, page, pageSize, q } = req.query;
  if (q) {
    return res.json({ message: "Not a good query" });
  }
  res.json(await getData(category, page, pageSize));
});

router.get("/everything", async (req, res) => {
  console.log(req.query);
  const { q, ...rest } = req.query;
  if (Object.keys(rest).length) {
    return res.json({ message: "Wrong Query" });
  }
  return res.json(await getDataQuery(q));
});

module.exports = router;
