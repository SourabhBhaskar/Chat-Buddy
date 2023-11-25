import React from 'react';
import { useTheme } from '../../Common/Theme';
import { Icon } from '@iconify/react';


function Block({ isBlocked=false }) {
  const { commonBgHover, primaryTxt } = useTheme();
  const handleBlock = () => ''
  return (
    <button onClick={handleBlock} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all ${commonBgHover} ${primaryTxt} text-red-500`}>
        <Icon icon="ri:forbid-line" />
        {isBlocked ? 'Unblock' : 'Block'}
    </button>
  )
}

export default Block;