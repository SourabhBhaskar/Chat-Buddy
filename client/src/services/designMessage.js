export function designMessage(isSent, message){
    const date = new Date();
    const newTime = date.getHours() + ':' + date.getMinutes();
    const newMessage = {
      direction: isSent ? 'sent' : 'received',
      time: newTime,
      message: message,
    };

    return newMessage
}