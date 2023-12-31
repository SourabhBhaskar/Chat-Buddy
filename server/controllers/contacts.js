const { User } = require('../models/user.model');
const convertEmail = (email) => email.replace(/@/g, '_at_').replace(/\./g, '_');


async function addContact(req, res) {
  const { userEmail, contactName, contactEmail } = req.body;
  console.log(userEmail, contactName, contactEmail)
  try {
  //   // Find the user by email
    const userAddingContact = await User.findOne({ 'personal_data.email': userEmail });
    if (!userAddingContact) {
      return res.status(404).json({ message: "You are not found" });
    }

  //   // Check if the email already exists in the contacts
  //   const convertedContactEmail = convertEmail(contactEmail);
  //   const contactExists = userAddingContact.contacts_data.all.get(convertedContactEmail);
  //   if (contactExists) 
  //     return res.status(400).json({ message: "Contact with this email already exists" });

  //   // Checking if contact already exists in the database
  //   let contactUser = await User.findOne({ 'personal_data.email': contactEmail });
  //   console.log(contactUser)
  //   if (contactUser === null){
  //     contactUser = new User({ 'personal_data.email': contactEmail, 'personal_data.username': contactName}).getContactData();
  //     contactUser.last_seen = "Not Active";
  //   }
  //   else{
  //     contactUser = contactUser.getContactData();
  //     contactUser.username = contactName;
  //   }

  //   // Add contactUser to userAddingContact's contacts array
  //   userAddingContact.contacts_data.all.set(convertedContactEmail, contactUser);
  //   await userAddingContact.save();

  //   // Send user data to the client
  //   res.status(200).json({ message: "Contact added successfully", data: contactUser });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { addContact };
