const { User } = require("../models/user.model");

async function userData(user){
  const userEmail = user.email;
  const userData = await User.findOne({ email: userEmail });
  const connectionEmails = userData.connections.map(c => c.bio.email);
  const connectionBios = await User.find({ email: { $in: connectionEmails } }, User.getUser());
  
  // Build a mapping of connection emails to user data
  const connectionBiosMap = new Map();
  connectionBios.forEach(bio => {
    connectionBiosMap.set(bio.email, bio);
  });
  
  // Map the fetched user data to the original userData.connections array
  userData.connections.forEach((c, i) => {
    const email = c.bio.email;
    const connectionBio = connectionBiosMap.get(email);
    if (connectionBio) userData.connections[i].bio = connectionBio;
    else console.log(`User with email ${email} not found.`);
  });
  
  return userData;
}


module.exports = { userData };