const mongoose = require('mongoose');


const profile_picture = undefined;
const last_seen = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() +1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const userSchema = new mongoose.Schema({
  username: { type: String, default: "" },
  mobile_number: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  location: { type: String, default: "" },
  last_seen: { type: String, default: last_seen },
  profile_picture: { type: String, default: profile_picture },
  status: { type: String, default: "" },
  contacts: { all: [], favorite: [], recent: [] },
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
    onCurrent: false,
    seen: false,
    unSeenMsgCnt: 0,
  };
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
