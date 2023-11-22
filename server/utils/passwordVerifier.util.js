

// Password Verifier
const passwordVerifier = (password) => {
    if(typeof password !== 'string') 
      return { error: "Password should be a string" };
    
    const isCharactersValid = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(password);
    if (!isCharactersValid) return { error: "Invalid characters in the password. Only use letters, numbers, and special characters." };
  
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) return { error: "Add at least one uppercase letter in the password." };
  
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase) return { error: "Add at least one lowercase letter in the password." };
  
    const hasDigit = /\d/.test(password);
    if (!hasDigit) return { error: "Add at least one digit in the password." };
  
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    if (!hasSpecialChar) return { error: "Add at least one special character in the password." };
  
    const isLengthValid = password.length >= 8 && password.length <= 16;
    if (!isLengthValid) return { error: "Password length should be between 8 to 16 characters." };
  
    return null; 
  }


// Export
module.exports = { passwordVerifier };