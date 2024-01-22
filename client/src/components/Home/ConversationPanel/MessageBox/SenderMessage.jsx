import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { getTimeByTimestamps } from "../../../../utils/getTimeByTimestamps.util";

// Sender
function SenderMessage({ Message }) {
  const { message, type, status, time } = Message;
  const sendTime = getTimeByTimestamps(time.seen || time.delivered || time.sent, true);

  const iconToDisplay =
    (status === "seen" && icons.messageSent) ||
    (status === "delivered" && icons.messageDelivered) ||
    (status === "sent" && icons.messageSent) ||
    (status === "sending" && icons.messageSending) ||
    (status === "error" && icons.messageResend);
    console.log(status)

  return (
    <div className="w-full flex justify-end my-1 px-2">
      <div className="flex gap-2 rounded-lg px-2 rounded-tr-none bg-primary-light-hover dark:bg-primary-dark-hover">
        <div className="flex items-center py-2">
          <p className="inline-block text-primary-light dark:text-primary-dark">
            {message}
          </p>
        </div>
        <div className="flex gap-1 items-center text-xs pt-4">
          <span className={`text-secondary-light dark:text-secondary-dark`}>
            {sendTime}
          </span>
          <Icon
            icon={iconToDisplay}
            fontSize={16}
            className={`${status === "seen" ? "text-green-600" : 'text-secondary-light dark:ext-secondary-dark'}`}
          />
        </div>
      </div>
      <div className="border-t-[10px] border-r-[5px] border-primary-t-light-hover dark:border-t-primary-dark-hover border-r-transparent"></div>
    </div>
  );
}

export default React.memo(SenderMessage);
