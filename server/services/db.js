// Import modules
require('dotenv').config();
const mongoose = require('mongoose');

// Connect to the database
async function connectToDatabase(URI) {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

// Entry point
async function startServer() {
  const MONGODB_URI = process.env.MONGODB_URI 
  if (MONGODB_URI) await connectToDatabase(MONGODB_URI);
  else console.error("MongoDB URI is not defined.");
}

// Exporting modules
module.exports = { startServer };