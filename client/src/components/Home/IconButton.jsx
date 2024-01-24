import React from 'react';
import { Icon } from '@iconify/react';


// Icon Button
function IconButton({ children, icon, onClick=()=>{} }) {
  return (
    <div className='w-auto h-auto relative flex items-center justify-center'>
      <button onClick={onClick} className='text-xl text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark '>
        <Icon icon={icon} className='flex transition-all' />
      </button>
      {children}
    </div>
  )
}


export default IconButton;