const Cart = require("../models/cart");

const addToCart = async (req, res) => {
  try {
    req.body.productImage = req.file.filename;
    await Cart.create(req.body);
    res.send("Item added to cart");
  } catch (err) {
    res.send("Something went wrong");
  }
};

const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.send(cartItems);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
    res.send(updatedItem);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.send({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

module.exports = { addToCart, getCartItems, updateCartItem, removeCartItem };
