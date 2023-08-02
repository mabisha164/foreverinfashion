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
module.exports = router;
