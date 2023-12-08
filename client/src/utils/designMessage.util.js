export function designMessage(message, from) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  const time = `${formattedHours}:${minutes} ${amOrPm}`;
  const messageFromUser = { from, time, message, status: 'send' };
  const messageFromConnection = { from, time, message };
  return from === 'user' ? messageFromUser : messageFromConnection;
}
