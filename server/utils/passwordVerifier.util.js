

// Password Verifier
const passwordVerifier = (password) => {

    if (!password) 
      return "Password is required.";

    if(typeof password !== 'string') 
      return "Password should be a string";

    const isLengthValid = password.length >= 8 && password.length <= 16;
    if (!isLengthValid) return "Password length should be between 8 to 16 characters.";
    
    const isCharactersValid = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(password);
    if (!isCharactersValid) return "Invalid characters in the password. Only use letters, numbers, and special characters.";
  
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) return "Add at least one uppercase letter in the password.";
  
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase) return "Add at least one lowercase letter in the password.";
  
    const hasDigit = /\d/.test(password);
    if (!hasDigit) return "Add at least one digit in the password.";
  
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    if (!hasSpecialChar) return "Add at least one special character in the password.";
  
    return null;
  }


// Export
module.exports = { passwordVerifier };