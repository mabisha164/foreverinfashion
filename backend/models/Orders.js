const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
  order_date: {
    type: Date, // Use Date type for order_date
    required: true,
    default: Date.now, // Set default value to current date and time
  },
});

module.exports = mongoose.model("order", OrderSchema);
