export function designMessage(message, isSender) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  const newTime = `${formattedHours}:${minutes} ${amOrPm}`;
  const newMessage = {
    direction: isSender ? 'sent' : 'received',
    time: newTime,
    message: message,
    status: 'send',
  };

  return newMessage;
}
