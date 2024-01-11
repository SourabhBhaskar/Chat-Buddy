import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';


function Block({ block, setBlock }) {
  const [isBlocked, setIsBlocked] = useState(false)
  const handleBlock = () => {
    setBlock(!block);
    setIsBlocked(!isBlocked);
  }

  return (
    <button onClick={handleBlock} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all text-red-500 hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color`}>
        <Icon icon={icons.block} />
        {isBlocked ? 'Unblock' : 'Block'}
    </button>
  )
}

export default Block;