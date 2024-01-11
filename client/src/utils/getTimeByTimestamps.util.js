// Get Time
export function getTimeByTimestamps(timestamps) {
    if (!timestamps) return null;
    const date = new Date(timestamps);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const time = `${formattedHours}:${minutes} ${amOrPm}`;
    return time;
  }
  