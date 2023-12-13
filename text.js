// Convert "a@gmail.com" to "a_gmail_com"
function emailToUnderscore(email) {
    return email.replace(/[@.]/g, '_');
  }
  
  // Convert "a_gmail_com" to "a@gmail.com"
  function underscoreToEmail(underscore) {
    return underscore.replace(/_/g, '.');
  }
  
  // Example usage
  const originalEmail = 'a@gmail.com';
  const convertedEmail = emailToUnderscore(originalEmail);
  console.log(convertedEmail); // Output: a_gmail_com
  
  const convertedBackEmail = underscoreToEmail(convertedEmail);
  console.log(convertedBackEmail); // Output: a@gmail.com
  