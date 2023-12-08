// Import
const mongoose = require("mongoose");


// User Status Schema
const UserStatusSchema = new mongoose.Schema({
    userId: { type: String, default: '', unique: true, index: true },
    connectionId: { type: String, default: '' }, 
    status: { type: String, default: 'offline' },
    last_seen: { type: Date, default: Date.now() }
});


// User Status Model
const UserStatus = mongoose.model('users_status', UserStatusSchema);


// Export
module.exports = { UserStatus };
