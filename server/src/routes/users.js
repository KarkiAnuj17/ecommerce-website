const { Router } = require('express');
const { loginUser, registerNewUser } = require('../controllers/users');
const { productSchema } = require('../controllers/products');
const app = Router();

app.post('/register', registerNewUser);
app.post('/login', loginUser);
app.post('/product',productSchema)
module.exports = app;