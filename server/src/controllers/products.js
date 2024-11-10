const Product = require('../models/products');
const addNewProduct = async (req, res) => {
  try{
    Product.create(req.body)
    res.send("ok created")
}catch(err){
    res.send("sth went wrong")
}
}
const getAllProduct = async (req, res) => {
  try{
    const data =await Product.find()
    res.send(data)
}catch(err){
    res.send("sth went wrong")
}
}
module.exports ={addNewProduct,getAllProduct}