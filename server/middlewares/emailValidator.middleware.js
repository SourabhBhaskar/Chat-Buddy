// Import
const { emailVerifier } = require("../utils/emailVerifier.util");


// User Credentials Verification
const emailValidator = (req, res, next) => {
    const { email } = req.body;

    // Email
    if(!email) 
        return res.status(400).json({ error: "Email is not provided" });

    // Email Verification
    const isEmailValid = emailVerifier(email);
    if(isEmailValid !== null) 
        return res.status(400).json({ ...isEmailValid });

    // Email
    console.log("Email is verified");
    next();
}


// Export
module.exports = { emailValidator };