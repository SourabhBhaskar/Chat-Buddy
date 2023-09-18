const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, default: '' },
  phone_number: { type: String, default: ''},
  email: { type: String, default: ''  },
  password: { type: String, default: '' },
  last_seen: { type: Date, default: Date.now }, // Use Date type for storing timestamps
  profile_picture: { type: String, default: '' },
  status: { type: String, default: '' },
  contacts: []
});

// Define a method called getProfile using a regular function
userSchema.methods.getProfile = function() {
  return {
    username: this.username,
    phone_number: this.phone_number,
    email: this.email,
    last_seen: this.last_seen,
    profile_picture: this.profile_picture,
    status: this.status,
    messages: []
  };
};

// Create a User model based on the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = { User };
