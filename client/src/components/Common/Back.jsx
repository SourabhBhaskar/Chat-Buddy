import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../utils/icons.util";


// Back Button
const Back = ({ exit }) => {
  return (
    <button className='inline-block text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' onClick={()=>exit()}>
      <Icon icon={icons.back} className="text-lg" />
    </button>
  )
}

export default Back;