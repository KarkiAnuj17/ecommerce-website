const { Router } = require('express');
const { addNewProduct, getAllProduct } = require('../controllers/products');
const app = Router();

app.post('/products',addNewProduct);
app.get('/products',getAllProduct);


module.exports = app;