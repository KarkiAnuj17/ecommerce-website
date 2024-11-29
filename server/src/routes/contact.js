const { Router } = require('express');
const { contactUser } = require('../controllers/contact');
const app = Router();

app.post('/contact', contactUser);


module.exports = app;