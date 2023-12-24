import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { useDispatch, useSelector } from "react-redux";
import { setViewPicture } from "../../../../context/Boolean/booleanSlice";

// Get Time
function getTime(timestamps) {
  if (!timestamps) return null;
  const date = new Date(timestamps);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const time = `${formattedHours}:${minutes} ${amOrPm}`;
  return time;
}


// Sender
const SenderMessage = React.memo(({ Message }) => {
  const dispatch = useDispatch();
  const { message, type, status, time } = Message;
  const sendTime = getTime(time.send);

  return (
    <div className="flex justify-end my-1">
      <div className="w-[80%] flex justify-end items-start group">
        <div className={`${ type !== "text" && "flex-col" } relative flex gap-2 rounded-b-lg rounded-tl-lg p-2 shadow-md bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color`}>
          <div className="w-auto h-auto flex justify-center items-center ">
            {type === "text"  && (<p className="text-[15px] flex items-center text-l-primary-txt-color dark:text-d-primary-txt-color">{message}</p>)}
            {type === "image" && (<img src={message} className={`rounded-md w-[200px] aspect-auto cursor-pointer`} onClick={() => dispatch(setViewPicture(true))}/>)}
            {type === "audio" && (<audio src={message} controls className="w-[200px] aspect-square rounded-md"/>)}
            {type === "video" && (<video src={message} controls className="w-[200px] aspect-video rounded-md"/>)}
          </div>
          <div className='h-auto relative flex flex-shrink-0 items-end gap-1 text-l-secondary-txt-color dark:text-d-secondary-txt-color '>
            <span className="text-[11px] flex">{sendTime}</span>
            <Icon className={`text-[16px] relative top-[-1px] ${status === 'seen' && 'text-[#25D366]'} `} icon={ status === 'sending' ? icons.messageSending : status === 'sent' ? icons.messageSent : status === 'delivered' ? icons.messageDelivered : status === 'seen' ? icons.messageSeen : '' } />
          </div>
        </div>
        <div className="border-t-[10px] border-r-[5px] border-r-transparent border-t-l-primary-hoverBg-color dark:border-t-d-primary-hoverBg-color"></div>
      </div>
    </div>
  );
});


// Receiver
const ReceiverMessage = React.memo(({ Message }) => {
  const dispatch = useDispatch();
  const { type, message, time } = Message;
  const sendTime = getTime(time.send);
  return (
    <div className="flex my-1">
      <div className="w-[80%] flex justify-start items-start">
        <div className={`border-t-[10px] border-l-[5px] border-t-[#7269ef] border-l-transparent`}></div>
        <div className={`flex ${ type !== "text" && "flex-col" } gap-2 bg-[#7269ef] rounded-b-lg rounded-tr-lg p-2 shadow-md`}>
          {type === "text"  && (<p className="text-[15px] flex items-center text-l-primary-txt-color dark:text-d-primary-txt-color">{message}</p>)}
          {type === "image" && (<img src={message} className="w-[200px] aspect-square rounded-md " onClick={() => dispatch(setViewPicture(true))}/>)}
          {type === "audio" && (<audio src={message} controls className="w-[200px] aspect-square rounded-md"/>)}
          {type === "video" && (<video src={message} controls className="w-[200px] aspect-video rounded-md"/>)}
          <div className='h-auto relative flex flex-shrink-0 justify-end items-end  gap-1 text-l-secondary-txt-color dark:text-d-secondary-txt-color '>
            <span className="text-[11px] flex text-gray-300">{sendTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
});


// Day Time
function Time({ Message }) {
  const dayTime = "Today";
  return (
    <div className="w-full h-auto flex justify-center py-4">
      <p className="text-white opacity-90 bg-[#fff1] p-2 rounded-lg text-xs">
        Today
      </p>
    </div>
  );
}

// Messages
function Message({ message }) {
  const messageSenderId = message.from;
  const userId = useSelector((state) => state.UserSlice).email;

  return (
    <>
      {userId === messageSenderId && <SenderMessage Message={message} />}
      {userId !== messageSenderId && <ReceiverMessage Message={message} />}
      {/* { from==='time' && <Time Message={message} /> } */}
    </>
  );
}

// Export
export default React.memo(Message);
