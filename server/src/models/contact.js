const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContactSchema = new Schema({
  fullName:String,
  email: String, 
  message:String,
});
const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact