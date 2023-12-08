import React from 'react';
import { Icon } from '@iconify/react';


function Block({ isBlocked=false }) {
  const handleBlock = () => ''
  return (
    <button onClick={handleBlock} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all text-red-500 hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color`}>
        <Icon icon="ri:forbid-line" />
        {isBlocked ? 'Unblock' : 'Block'}
    </button>
  )
}

export default Block;