// Imports
import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../../utils/icons.util";


// Status
function Status({ status, last_seen }) {
  const isOnline =
    last_seen === "online" || last_seen === "typing..." ? true : false;

  return (
    <div className="w-full flex items-center justify-center gap-1 text-secondary-light dark:text-secondary-dark">
      <Icon icon={icons.status} fontSize={12} className={`${isOnline ? 'text-green-400' : 'text-red-400'}`} />
      <p>{status}</p>
    </div>
  );
}


// Export
export default Status;
