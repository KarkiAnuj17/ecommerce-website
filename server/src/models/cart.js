const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productImage: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  discount: { type: Number, default: 0 },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
