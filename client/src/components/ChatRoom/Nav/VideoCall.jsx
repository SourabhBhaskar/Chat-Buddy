import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";


// Video Call Button
const VideoCall = () => {
  return (
    <div className="hidden sm:block">
      <button>
        <Icon icon={icons.vidoeCall} className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'/>
      </button>
    </div>
  )
}


export default VideoCall;