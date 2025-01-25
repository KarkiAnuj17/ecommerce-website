const Categories = require('../models/categories');
const addNewCategories = async (req, res) => {
  try{
    req.body.categoryImage = req.file.filename;
    Categories.create(req.body)
    res.send("ok created")
}catch(err){
    res.send("sth went wrong")
}
}
const getAllCategories = async (req, res) => {
  try{
    const data =await Categories.find()
    res.send(data)
}catch(err){
    res.send("sth went wrong")
}
}

module.exports ={addNewCategories,getAllCategories}