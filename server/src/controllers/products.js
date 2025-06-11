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
    const { sort } = req.query;
    let sortOption = {};
    if (sort === 'asc') {
      sortOption.productPrice = 1; 
    } else if (sort === 'desc') {
      sortOption.productPrice = -1;
    }
    
    const data = await Product.find().sort(sortOption);
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
const updateProductById = async (req, res) => {
  try{
    const data =await Product.findByIdAndUpdate(req.params.productId,req.body)
    res.send(data)
}catch(err){
    res.send("sth went wrong")
}}
const deleteProductById = async (req, res) => {
  try{
    const data =await Product.findByIdAndDelete(req.params.productId)
    res.send(data)
}catch(err){
    res.send("sth went wrong")
}}
module.exports ={addNewProduct,getAllProduct,getProductById,deleteProductById,updateProductById}