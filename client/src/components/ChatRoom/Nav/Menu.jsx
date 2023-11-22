import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";




// Menu Button
const Menu = React.memo(() => {
  return (
    <div>
      <button>
        <Icon icon={icons.menu} className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'/>
      </button>
    </div>
  );
})


export default Menu;