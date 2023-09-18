// Built-in modules
const mongoose = require('mongoose');


// Contact List schema
const contactListSchema = new mongoose.Schema({
  name: String,
  email: String,
  messages: Array
});


// User schema with timestamps
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  profilePic: String,
  status: String, 
  contactList: [contactListSchema]
  }, {
    timestamps: true, 
  });


// Profile model
const Profile = mongoose.model('Profile', userSchema);


// Export modules
module.exports = { Profile }