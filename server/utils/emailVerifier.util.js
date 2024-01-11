// Imports
const validator = require("validator");


// Email Verifier
const emailVerifier = (email) => {
    if(typeof email !== 'string') 
        return { error: "Email should be a string" };

    // Check email syntax
    const isEmailSyntaxValid = validator.isEmail(email);
    if(!isEmailSyntaxValid) 
        return { error: "Email is not valid" };

    return { error: null };
}


// Export
module.exports = { emailVerifier };