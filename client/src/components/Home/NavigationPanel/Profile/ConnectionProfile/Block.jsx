import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../../utils/icons.util';
import { useBlockConnection } from '../../../../../Hooks/userConnections/useBlockConnection.hook';


function Block({ connectionEmail, isBlocked }) {
  const blockConnection = useBlockConnection();
  const handleBlock = () => {
    blockConnection.submit({ connectionEmail: connectionEmail, isBlocked: !isBlocked })
  }

  return (
    <button onClick={handleBlock} className={`w-full flex items-center gap-2 py-2 rounded-md p-2 transition-all text-red-600 hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover`}>
        <Icon icon={icons.block} />
        {isBlocked ? 'Unblock' : 'Block'}
    </button>
  )
}

export default Block;