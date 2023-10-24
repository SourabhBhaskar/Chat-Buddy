// Create a function that returns the current date and time
function getCurrentDateTime() {
    const date = new Date();
  
    // Date
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const custom_date = `${day}-${month}-${year}`;
  
    // Time
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    let period = hours < 12 ? 'AM' : 'PM';
    const custom_time = `${hours}:${minutes} ${period}`;
  
    return { custom_date, custom_time };
  }
  
  // Export the function
  module.exports = getCurrentDateTime;
  