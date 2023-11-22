import React from 'react';
import { useTheme } from '../../Common/Theme';
import { Icon } from '@iconify/react';


function Share() {
  const { commonBgHover, primaryTxt } = useTheme();
  const handleShare = () => ''
  return (
    <button onClick={handleShare} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all ${commonBgHover} ${primaryTxt}`}>
        <Icon icon="ri:share-line" />
        Share
    </button>
  )
}

export default Share;