const { User } = require("../../models/user.model");


// Signup controller
const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check, If user exists already
    const isExist = await User.findOne({ email });
    if(isExist)
      return res.status(409).send('Email already exists' );

    // Creation
    const newUser = await User.create({ username, email, password });

    // User Login
    req.login(newUser, (err) => {
      if(err) 
        return res.status(500).send("Signup successful, but an error occurred during login" );
      return res.status(200).json(newUser);
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};


// Export
module.exports = { userSignup };