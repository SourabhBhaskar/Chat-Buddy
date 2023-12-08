// Imports
import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';


// Menu
function Menu() {
  return (
    <div>
        <button className='flex justify-center items-center text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'>
            <Icon icon={icons.menu}/>
        </button>
    </div>
  )
}


// Export
export default Menu;