const mongoose = require("mongoose");
const { custom_date  } = require("../services/date");


const profile_picture = undefined;
const userSchema = new mongoose.Schema({
  username: { type: String, default: "" },
  mobile_number: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  location: { type: String, default: "" },
  last_seen: { type: Object, default: custom_date },
  profile_picture: { type: String, default: profile_picture },
  status: { type: String, default: "" },
  contacts: {
    contactsMap: {
      type: Map,
      of: Object,
      default: new Map(),
    }, 
    all: ["hi"],
    favorite: ["hi"],
    recent: ["hi"]
  },
  groups: [],
  setting: {},
});


userSchema.methods.getPublicData = function () {
  return {
    username: this.username,
    mobile_number: this.mobile_number,
    email: this.email,
    location: this.location,
    last_seen: this.last_seen,
    profile_picture: this.profile_picture,
    status: this.status,
  };
};


userSchema.methods.getContactData = function () {
  return {
    username: this.username,
    mobile_number: this.mobile_number,
    email: this.email,
    location: this.location,
    last_seen: this.last_seen,
    profile_picture: this.profile_picture,
    status: this.status,

    messages: [],
    unSeenMsgCnt: 0,
    isSeen: false,
  };
};



const User = mongoose.model("User", userSchema);
module.exports = { User };
