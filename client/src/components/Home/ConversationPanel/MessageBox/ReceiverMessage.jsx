import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { getTimeByTimestamps } from "../../../../utils/getTimeByTimestamps.util";

// Sender
function SenderMessage({ Message }) {
  const { message, type, status, time } = Message;
  const sendTime = time.seen || time.delivered || time.sent;

  return (
    <div className="w-full flex justify-start my-1 px-2">
      <div className={`border-t-[10px] border-l-[5px] border-main-color border-l-transparent`}></div>
      <div className="flex gap-2 rounded-lg px-2 rounded-tl-none bg-main-color">
        <div className="flex items-center py-2">
          <p className="inline-block text-primary-dark">
            {message}
          </p>
        </div>
        <div className="flex gap-1 items-center text-xs pt-4">
          <span className={`text-gray-300 text-xs`}>
            {sendTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SenderMessage;
