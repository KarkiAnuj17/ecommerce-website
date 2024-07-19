const product =require('../models/product')
const productSchema = (req, res) => {
  product.create(req.body)
  res.send("ok created");
}
module.exports ={productSchema}