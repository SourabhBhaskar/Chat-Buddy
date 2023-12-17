// Imports
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';


// Menu Item
function MenuItem({ icon, text}){
  return (
    <span className='flex items-center gap-2  text-l-secondary-txt-color dark:text-d-secondary-txt-color'>
      <Icon icon={icon} />
      <li>{text}</li>
    </span>
  )
}


// Menu
function Menu() {
  const [menu, setMenu] = useState(false);

  const handleSetMenu = (e) => {
    e.stopPropagation();
    setMenu(!menu);
  }

  return (
    <div className='relative'>
      <button onClick={handleSetMenu} className='flex justify-center items-center text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'>
        <Icon icon={icons.menu}/>
      </button>
      { menu && <ul className='rounded-md p-4 absolute right-full top-full flex flex-col gap-2 shadow-md bg-l-primary-bg-color dark:bg-d-secondary-bg-color'>
        <MenuItem text={"Chat"} icon={icons.chats} />
        <MenuItem text={"Share"} icon={icons.share} />
        <MenuItem text={"Delete"} icon={icons.delete} />
        <MenuItem text={"Block"} icon={icons.block} />
      </ul>}
    </div>
  )
}


// Export
export default Menu;