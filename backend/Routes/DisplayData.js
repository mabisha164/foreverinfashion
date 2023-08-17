const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

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

router.post("/addProduct", async (req, res) => {
  try {
    const newProductData = req.body; // Assuming the request body contains the new product details

    // Create a new Product instance using the Mongoose model
    const newProduct = new Product(newProductData);

    // Save the new product to the database
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});
router.put("/editProduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body; // Assuming the request body contains the updated product details

    // Find the product by ID and update its data
    await Product.findByIdAndUpdate(productId, updatedProductData);

    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

router.delete("/deleteProduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Find the product by ID and remove it
    await Product.findByIdAndRemove(productId);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
