const { usernameVerifier } = require("../utils/usernameVerifier.util");
const { emailVerifier } = require("../utils/emailVerifier.util");
const { passwordVerifier } = require("../utils/passwordVerifier.util");


// User Credentials Verification
const userCredentialsVerifier = (req, res, next) => {
    const { username, email, password } = req.body;

    // Username Verification
    const usernameError = usernameVerifier(username);
    if (usernameError) {
        return res.status(400).send(usernameError);
    }

    // Email Verification
    const emailError = emailVerifier(email);
    if (emailError) {
        return res.status(400).send(emailError);
    }

    // Password Verification
    const passwordError = passwordVerifier(password);
    if (passwordError) {
        return res.status(400).send(passwordError);
    }

    next();
};

// Export
module.exports = { userCredentialsVerifier };
