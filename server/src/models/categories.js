const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: { type: String, required: true },
    categoryDescription: { type: String, default: "" },
    categoryImage: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
