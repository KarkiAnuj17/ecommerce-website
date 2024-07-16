const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: String, 
  middleName: String, 
  lastName: String, 
  phoneNumber: String, 
  gender: {
      type: String,
      enum : ['Male','Female','Others'],
      default: 'Male'
  },
  email: String,
  username:String,
  password: String, 
  confirmPassword: String
});
const User = mongoose.model('User', userSchema);
module.exports = User