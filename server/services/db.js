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
async function startDB() {
  const MONGODB_URI = process.env.MONGODB_URI 
  if (MONGODB_URI) await connectToDatabase(MONGODB_URI);
  else console.error("MongoDB URI is not defined.");
}

// Exporting modules
module.exports = { startDB };


// const mongoose = require('mongoose');

// // Define your schema
// const userSchema = new mongoose.Schema({
//   username: { type: String, default: '' },
//   contacts: {
    // all: {
    //   type: Map,
    //   of: String,
    //   default: new Map([
    //     ['key1', 'value1'],
    //     ['key2', 'value2'],
    //   ]),
    // },
//   },
// });

// // Create a model from the schema
// const User = mongoose.model('User', userSchema);

// // Connect to your MongoDB database
// mongoose.connect(process.env.MONGODB_URI , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Once connected, save a default user with the map
// mongoose.connection.on('connected', () => {
//   const defaultUser = new User({
//     username: 'Default User',
//   });

//   defaultUser.save((err) => {
//     if (err) {
//       console.error('Error saving default user:', err);
//     } else {
//       console.log('Default user saved with map:', defaultUser);
//     }

//     mongoose.connection.close(); // Close the connection when done
//   });
// });
