// Imports
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");


// User Schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true, index: true },
    mobile_number: { type: String, default: "" },
    password: { type: String, required: true },
    profile_picture: { type: String, default: "" },
    status: { type: String, default: "Available" },
    description: { type: String, default: "" },
    last_seen: { type: String, default: Date.now() },
    location: { type: String, default: "" },
    connections: {
      all: {type: Object, default: {}},
      favorites: [{ type: String }],
      recents: [{ type: String }],
    },
    groups: { type: Object, default: {}},
    settings: { type: Object, default: {}}
  },
  { minimize: false }
);


// Hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      // Hash the password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});


// User Model
const User = mongoose.model("User", userSchema);


// Export
module.exports = { User };
