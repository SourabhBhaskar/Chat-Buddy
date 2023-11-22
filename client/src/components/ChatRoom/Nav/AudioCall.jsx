import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";



// Call Button
const AudioCall = () => {
  return (
    <div className="hidden sm:block">
      <button>
        <Icon icon={icons.audioCall} className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'/>
      </button>
    </div>
  )
}


export default AudioCall;