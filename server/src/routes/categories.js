const { Router } = require('express');
const { addNewCategories  } = require('../controllers/categories');
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

app.post('/categories',upload.single('categoryImage'), addNewCategories);
module.exports = app;