const { User } = require('../models/user');
const convertEmail = (email) => email.replace(/@/g, '_at_').replace(/\./g, '_');

async function addContact(req, res) {
  const { userEmail, contactName, contactEmail } = req.body;
  try {
    // Find the user by email
    const userAddingContact = await User.findOne({ email: userEmail });
    if (!userAddingContact) {
      return res.status(404).json({ message: "You are not found" });
    }

    // Check if the email already exists in the contacts
    const convertedEmail = convertEmail(contactEmail);
    const contactExists = userAddingContact.contacts.contactsMap.get(convertedEmail);
    if (contactExists) 
      return res.status(400).json({ message: "Contact with this email already exists" });

    // Checking if contact already exists in the database
    let contactUser = await User.findOne({ email: contactEmail });
    if (contactUser === null) {
      contactUser = new User({ username: contactName, email: contactEmail }).getContactData();
    } else {
      contactUser = contactUser.getContactData();
      contactUser.username = contactName;
    }

    // Add contactUser to userAddingContact's contacts array
    userAddingContact.contacts.all.push({ email:convertedEmail, username: contactName });
    userAddingContact.contacts.contactsMap.set(convertedEmail, contactUser);
    await userAddingContact.save();

    // Send user data to the client
    res.status(200).json({ message: "Contact added successfully", data: contactUser });
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { addContact };
