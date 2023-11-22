// Imports
const { emailVerifier } = require("../utils/emailVerifier.util");
const { passwordVerifier } = require("../utils/passwordVerifier.util");


// User Credentials Verification
const userCredentialsVerifier2 = (req, res, next) => {
    const { email, password } = req.body;

    // Email & Password Validation
    if(!email && !password) return res.status(400).json({ error: "Please provide your email & password"} );
    if(!email) return res.status(400).json({ error: "Please provide your email" });
    if(!password) return res.status(400).json({ error: "Please provide your password" });

    // Email Verification
    const isEmailValid = emailVerifier(email);
    if(isEmailValid !== null)
        return res.status(400).json({ ...isEmailValid });

    const isPasswordValid = passwordVerifier(password);
    if(isPasswordValid !== null)
        return res.status(400).json({ ...isPasswordValid });

    // Email & Password Varified
    console.log("Username & Email are verified");
    next();
}


// Export
module.exports = { userCredentialsVerifier2 };