import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";


function SendMore(){
    return (
      <div className="flex items-center relative">
        <button  className='te text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color hover:dark:text-d-primary-txt-color'>       
          <Icon icon={icons.sendMore} className="text-xl" />
        </button>
      </div>
    )
  }

  export default SendMore;