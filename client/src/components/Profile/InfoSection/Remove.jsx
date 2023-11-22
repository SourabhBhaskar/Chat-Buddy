import React from 'react';
import { useTheme } from '../../Common/Theme';
import { Icon } from '@iconify/react';


function Remove() {
  const { commonBgHover, primaryTxt } = useTheme();
  const handleRemove = () => ''
  return (
    <button onClick={handleRemove} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all ${commonBgHover} ${primaryTxt}`}>
        <Icon icon="ri:delete-bin-line" />
        Remove
    </button>
  )
}

export default Remove;