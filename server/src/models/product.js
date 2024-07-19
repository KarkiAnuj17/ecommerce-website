const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
  productName: String, 
  productPrice: Number,
  discountPrice: Number,
  productCompany:String,
  productQuantity:Number

});
const product = mongoose.model('product', productSchema);
module.exports = product