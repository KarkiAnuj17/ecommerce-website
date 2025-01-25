const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productBrand: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  productImage: { type: String, required: true },
  categories: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  ratings: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  categories: {type: String, required: true},
  colorOption: { type: [String], required: true },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product