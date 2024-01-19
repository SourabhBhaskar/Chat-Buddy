import React from "react";
import { useSelector } from "react-redux";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";
import DayTime from "./DayTime";



// Messages
function Message({ message }) {
  const messageSenderId = message.from;
  const userId = useSelector((state) => state.UserSlice).email;
  return (
    <>
      {/* {userId === messageSenderId && <SenderMessage Message={message} />} */}
      {/* {userId !== messageSenderId && <ReceiverMessage Message={message} />} */}
      {/* { from === 'time' && <DayTime Message={message} /> } */}
    </>
  );
}

// Export
export default React.memo(Message);
