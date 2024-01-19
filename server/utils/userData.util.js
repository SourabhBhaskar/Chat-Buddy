const { User } = require("../models/user.model");
const { convertEmail, convertBackEmail } = require("../utils/emailConvert.util");


async function userData(user){
    const userEmail = user.email;
    const userData = await User.findOne({ email: userEmail });

    // Connections's Email
    const connectionsEmail = [];
    userData.connections.forEach((c) => connectionsEmail.push(c.bio.email));

    // Connections's Data
    const connectionsBio = await User.find(
      { email: { $in: connectionsEmail } },
      User.getUser()
    );

    console.log(connectionsBio)

    // // Updating UserData's connection.all[email].bio
    // connectionsBio.forEach((bio) => {
    //     const key = convertEmail(bio.email);
    //     const value = userData.connections.all.get(key);
    //     value.bio = bio;
    // })

    // console.log(userData)
    // return userData;

    // connections.all map to object 
    // userData.connections.all = { ...Object.fromEntries(Array.from(userData.connections.all)) };
    // console.log(userData.connections.all)
    // connectionBio.forEach((value) => {
    //     user.connections.all[value.email]
    // })

    // connections.forEach((value, key) => {
    //     console.log(value, key)
    // })
    // console.log(connections)
    // for(let key in connections){
    //     console.log(connections[key])
    // //   connections[convertBackEmail(key)] = connections[key];
    // //   delete connections[key];
    // }

    // console.log(connections)

    // Getting User's Data

  //   // Updating Connections
  //   users.forEach((user) => {
  //     connections[user.email] = { ...connections[user.email], ...user.toObject() };
  //   });

  //   const updatedUser = {
  //     ...user.toObject(),
  //     connections: {
  //       ...user.connections,
  //       all: connections,
  //     },
  //   };

  return userData;
}


module.exports = { userData };