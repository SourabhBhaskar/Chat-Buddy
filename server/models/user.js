const mongoose = require('mongoose');
const date = require('../services/date');
const dummyData = require('../models/dummyData');

// console.log(JSON.parse(dummyData))
const profile_picture = undefined;
const userSchema = new mongoose.Schema({
  username: { type: String, default: "" },
  mobile_number: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  location: { type: String, default: "" },
  last_seen: { type: Object, default: date },
  profile_picture: { type: String, default: profile_picture },
  status: { type: String, default: "" },
  contacts: {
    all: [],
    favorite: [],
    recent: []
  },
  groups: [],
  setting: {}
});


userSchema.methods.getProfile = function () {
  return {
    username: this.username,
    mobile_number: this.mobile_number,
    email: this.email,
    location: this.location,
    last_seen: this.last_seen,
    profile_picture: this.profile_picture,
    status: this.status,
    messages: [],
    seen: false,
    unSeenMsgCnt: 0,
    isCurrent: false,
    isFavorite: false,
    isRecent: false,
  };
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
