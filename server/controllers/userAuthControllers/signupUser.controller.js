// Imports
const bcrypt = require("bcryptjs");
const { User } = require("../../models/user.model");


// Signup controller
const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {

    // Check, If user exists already
    const isExist = await User.findOne({ email });
    if(isExist)
      return res.status(404).json({ error: "Email already exists" });

    // Creation
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = await User.create({ username, email, password: hashedPassword });

    // User Login
    req.login(newUser, (err) => {
      if(err) 
        return res.status(500).json({ error: "Signup successful, but an error occurred during login" });
      console.log("Signup successful");
      return res.status(200).json({ message: 'Signup successful', data: newUser });
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};


// Export
module.exports = { userSignup };