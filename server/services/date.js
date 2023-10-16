const date = new Date();

// Date
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');
const formattedDate = `${day}-${month}-${year}`;

// Time
const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
const minutes = date.getMinutes().toString().padStart(2, '0');
let period = hours < 12 ? 'AM' : 'PM';
const formattedTime = `${hours}:${minutes} ${period}`;

// Total Time
const TotalTime = { date: formattedDate, time: formattedTime };

// export default TotalTime;
module.exports = TotalTime;
