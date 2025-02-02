const { Router } = require("express");
const { addToCart, getCartItems, updateCartItem, removeCartItem } = require("../controllers/cart");
const app = Router();

app.post("/cart", addToCart);  
app.get("/cart", getCartItems);  
app.patch("/cart/:id", updateCartItem); 
app.delete("/cart/:id", removeCartItem);  

module.exports = app;
