// Import modules
require('dotenv').config();
const mongoose = require('mongoose');


// Declarations
const URI = process.env.MONGODB_URI;


// MongoDB connection
mongoose.connect(URI)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log("Not connected to DB"));


// Exporting modules
module.exports = { mongoose };