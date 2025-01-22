const Product = require('../models/products');
const addNewProduct = async (req, res) => {
  try{
    req.body.productImage = req.file.filename;
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
const getProductById = async (req, res) => {
  try{
    const data =await Product.findById(req.params.productId)
    res.send(data)
}catch(err){
    res.send("sth went wrong")
}}
module.exports ={addNewProduct,getAllProduct,getProductById}