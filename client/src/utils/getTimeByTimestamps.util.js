export function getTimeByTimestamps(timestamp, onlyTime) {
  if (typeof timestamp === 'string')
    return timestamp;

  const now = new Date();
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const isToday = now.toDateString() === date.toDateString();
  const isYesterday = new Date(now - 86400000).toDateString() === date.toDateString(); 

  if(onlyTime){
    const formattedHours = hours % 12 || 12; 
    return `${formattedHours}:${minutes} ${ampm}`;
  }else if (isToday) {
    const formattedHours = hours % 12 || 12; 
    return `Today, ${formattedHours}:${minutes} ${ampm}`;
  } else if (isYesterday) {
    const formattedHours = hours % 12 || 12;
    return `Yesterday, ${formattedHours}:${minutes} ${ampm}`;
  } else {
    return `${day}-${month}-${year}`;
  }
}