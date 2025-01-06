const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/projectdb');
const { Schema } = mongoose;
const userSchema = new Schema({
  fullName: String, 
  phoneNumber: Number, 
  gender: {
      type: String,
      enum : ['Male','Female','Others'],
      default: 'Male'
  },
  role: {
    type: String,
    enum : ['Buyer','Seller'],
    default: 'Buyer'
  },
  email: String,
  password: String, 
});
const User = mongoose.model('User', userSchema);
module.exports = User