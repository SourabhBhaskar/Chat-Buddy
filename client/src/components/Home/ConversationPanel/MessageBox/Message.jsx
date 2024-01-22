import React from "react";
import { useSelector } from "react-redux";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";


// Messages
function Message({ message }) {
  const senderId = message.from;
  const currentConnection = useSelector(state => state.ConnectionsSlice).currentConnection;
  return senderId === currentConnection ? ( <ReceiverMessage Message={message} />  ) : ( <SenderMessage Message={message} />)
}

// Export
export default React.memo(Message);
