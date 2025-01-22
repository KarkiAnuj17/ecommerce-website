const { Router } = require('express');
const { addNewProduct, getAllProduct ,getProductById} = require('../controllers/products');
const app = Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() +file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/products',upload.single('productImage'), addNewProduct);
app.get('/products',getAllProduct);
app.get('/products/:productId',getProductById);


module.exports = app;