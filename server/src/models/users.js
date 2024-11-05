const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, 
  middleName:String,
  lastName:String,
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