import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import IconButton from '../Common/IconButton';


function Emoji() {
  return (
    <IconButton>
        <Icon icon={icons.emoji} />
    </IconButton>
  )
}

export default Emoji;