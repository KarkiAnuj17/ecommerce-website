const Product = require('../models/products');
const addNewProduct = (req, res) => {
  Product.create(req.body)
  res.send("ok created");
}
module.exports ={addNewProduct}