const crypto = require('crypto');

function emailToShortString(email) {
  // Create an MD5 hash of the email address
  const md5Hash = crypto.createHash('md5').update(email).digest('hex');
  console.log(md5Hash)
  // Truncate the hash to the first 12 characters
  const shortString = md5Hash.slice(0, 12);
  
  return shortString;
}

const email = 'user@example.com';
const shortString = emailToShortString(email);

console.log('Email:', email);
console.log('Short String:', shortString);
