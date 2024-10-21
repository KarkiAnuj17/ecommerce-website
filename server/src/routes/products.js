const { Router } = require('express');
const { addNewProduct } = require('../controllers/products');
const app = Router();


app.post('/products',addNewProduct);

module.exports = app;