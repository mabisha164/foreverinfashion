const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

// router.post("/orderData", async (req, res) => {
//   try {
//     const { email, order_date, order_data } = req.body;

//     const existingOrder = await Order.findOne({ email });

//     if (existingOrder === null) {
//       await Order.create({
//         email,
//         order_data,
//         order_date: new Date(order_date),
//       });
//     } else {
//       await Order.findOneAndUpdate(
//         { email },
//         { $push: { order_data: order_data } }
//       );
//     }

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ success: false, error: "Server Error" });
//   }
// });
router.post("/orderData", async (req, res) => {
  try {
    const { email, order_date, order_data } = req.body;

    const existingOrder = await Order.findOne({ email });

    if (existingOrder === null) {
      await Order.create({
        email,
        order_data: [order_data], // Wrap the order_data in an array
        order_date: new Date(order_date),
      });
    } else {
      await Order.findOneAndUpdate(
        { email },
        { $push: { order_data: order_data } }
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

router.post("/myorderData", async (req, res) => {
  try {
    const { email } = req.body;

    const existingOrder = await Order.findOne({ email });

    if (!existingOrder) {
      return res
        .status(404)
        .json({ success: false, error: "No orders found for this email" });
    }

    res.json({ success: true, order_data: existingOrder.order_data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

router.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.send({ status: "ok", data: allOrders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error", data: "Internal server error" });
  }
});

router.post("/deleteOrder", async (req, res) => {
  const { orderid } = req.body;

  try {
    const result = await Order.deleteOne({ _id: orderid });
    if (result.deletedCount === 1) {
      res.send({ status: "Ok", data: "Deleted" });
    } else {
      res.status(404).send({ status: "Error", data: "Order not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "Error", data: "Internal server error" });
  }
});

module.exports = router;
