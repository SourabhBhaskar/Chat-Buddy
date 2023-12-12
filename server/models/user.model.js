// Imports
const mongoose = require('mongoose');


// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true, index: true },
  mobile_number: { type: String, default: '' },
  password: { type: String, required: true },
  profile_picture: { type: String, default: '' },
  status: { type: String, default: 'Available' },
  description: { type: String, default: '' },
  last_seen: { type: Date, default: Date.now() },
  location: { type: String, default: '' },
  connections: {
    all: [{ type: Object }],
    favorites: [{ type: String }],
    recents: [{ type: String }],
  },
  connections_data: [{ type: Object }]
}, { minimize: false });


// User Model
const User = mongoose.model('User', userSchema);


// Export
module.exports = { User };


