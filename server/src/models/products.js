const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
  productName: String, 
  productPrice: Number,
  productBrand:String,
  stockQuantity:Number,
  discount: Number,
  ratings: {type:Number ,default:0},
  isFeatured: {type:Boolean,default:false},
  colorOption:[String] ,

});
const Product = mongoose.model('Product', productSchema);
module.exports = Product