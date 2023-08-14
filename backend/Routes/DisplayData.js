const express = require("express");
const router = express.Router();

router.post("/womenfashion", (req, res) => {
  try {
    res.send([global.clothes, global.category]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

router.get("/paginateProducts", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const itemsPerPage = 9;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = global.clothes.slice(startIndex, endIndex);

    res.json(paginatedItems);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
