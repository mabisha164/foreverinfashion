const express = require("express");
const router = express.Router();

const cors = require("cors");
const Order = require("../models/Orders");
router.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain
    credentials: true, // Allow cookies, authentication headers, etc.
  })
);
router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_date: req.body.order_date });

  let eId = await Order.findOne({ email: req.body.email });
  console.log(eId);
  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send("Server Error", error.message);
    }
  }
});

module.exports = router;

// router.post("/orderData", async (req, res) => {
//   const { order_data, email, order_date } = req.body;

//   try {
//     // Find or create a user based on the provided email
//     let user = await user.findOne({ email }); // Replace 'User' with your user model

//     if (!user) {
//       user = await user.create({ email, cart: [] }); // Create a new user if not found
//     }

//     // Add the order data to the user's order history
//     user.order_data.push({ order_date, items: order_data });
//     await user.save();

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });
// module.exports = router;
