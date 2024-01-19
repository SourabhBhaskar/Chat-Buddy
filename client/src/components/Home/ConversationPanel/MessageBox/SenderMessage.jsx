import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { getTimeByTimestamps } from "../../../../utils/getTimeByTimestamps.util";

// Sender
function SenderMessage({ Message }){
    const dispatch = useDispatch();
    // const { resendMessage } = useResendMessage();
    const { message, type, status, time } = Message;
    const sendTime = getTimeByTimestamps(time.seen || time.delivered || time.sent);
    const iconToDisplay = (status === 'seen' && icons.messageSent) || (status === 'delivered' && icons.messageDelivered) || (status === 'sent' && icons.messageSent) || (status === 'sending' && icons.messageSending) || (status === 'error' && icons.messageResend);
  
    return (
      <div className="flex justify-end my-1">
        <div className="w-[80%] flex justify-end items-start group">
          <div className={`${ type !== "text" && "flex-col" } relative flex gap-2 rounded-b-lg rounded-tl-lg p-2 shadow-md bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color`}>
            <div className="w-auto h-auto flex justify-center items-center ">
              {type === "text"  && (<p className="text-[15px] flex items-center text-l-primary-txt-color dark:text-d-primary-txt-color">{message}</p>)}
              {/* {type === "image" && (<img src={message} className={`rounded-md w-[200px] aspect-auto cursor-pointer`} onClick={() => dispatch(setViewPicture(message))}/>)}
              {type === "audio" && (<audio src={message} controls className="w-[200px] aspect-square rounded-md"/>)}
              {type === "video" && (<video src={message} controls className="w-[200px] aspect-video rounded-md"/>)} */}
            </div>
            <div className='h-auto relative flex flex-shrink-0 items-end gap-1 text-l-secondary-txt-color dark:text-d-secondary-txt-color '>
              <span className="text-[11px] flex">{sendTime}</span>
              {/* <button onClick={() => resendMessage({ ...Message })} className={`${status === 'error' ? 'cursor-pointer' : 'cursor-default'} `}>
                <Icon icon={iconToDisplay} className={`text-[16px] relative top-[-1px] ${status === 'sending' && 'text-[#7269ef]'} ${status === 'seen' && 'text-[#25D366]'} ${status === 'error' && 'text-[#f64f4f] hover:text-[#f00]'} `} />
              </button> */}
            </div>
          </div>
          <div className="border-t-[10px] border-r-[5px] border-r-transparent border-t-l-primary-hoverBg-color dark:border-t-d-primary-hoverBg-color"></div>
        </div>
      </div>
    );
  };


  export default React.memo(SenderMessage);