import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getTimeByTimestamps } from "../../../utils/getTimeByTimestamps.util";

// Receiver
function ReceiverMessage({ Message }){
    const [isDownloading, setIsDownloading] = useState(true);
    const dispatch = useDispatch();
    const { type, message, time } = Message;
    const receivedTime = getTimeByTimestamps(time.received);
  
    return (
      <div className="flex my-1">
        <div className="w-[80%] flex justify-start items-start">
          <div className={`border-t-[10px] border-l-[5px] border-t-[#7269ef] border-l-transparent`}></div>
          <div className={`flex relative ${ type !== "text" && "flex-col" } gap-2 bg-[#7269ef] rounded-b-lg rounded-tr-lg p-2 shadow-md`}>
            <div className="w-full h-full relative">
              {/* <div className="border-2 w-[100px] h-[50px] "></div> */}
              {/* {type !== "text"  && isDownloading && <Loader />} */}
              {type === "text"  && (<p className="text-[15px] flex items-center text-l-primary-txt-color dark:text-d-primary-txt-color">{message}</p>)}
              {/* {type === "image" && (<img src={message} className="w-[200px] aspect-square rounded-md " onClick={() => dispatch(setViewPicture(true))}/>)}
              {type === "audio" && (<audio src={message} controls className="w-[200px] aspect-square rounded-md"/>)}
              {type === "video" && (<video src={message} controls className="w-[200px] aspect-video rounded-md"/>)} */}
            </div>
            <div className='h-auto relative flex flex-shrink-0 justify-end items-end  gap-1 text-l-secondary-txt-color dark:text-d-secondary-txt-color '>
              <span className="text-[11px] flex text-gray-300">{receivedTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default React.memo(ReceiverMessage);