import React from 'react';
import { Icon } from '@iconify/react';


// Icon Button
function IconButton({ icon, onClick=()=>{} }) {
  return (
    <button onClick={onClick} className='text-xl text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color dark:hover:text-d-primary-txt-color '>
      <Icon icon={icon} className='hidden xl:flex mx-4' />
    </button>
  )
}


export default IconButton;