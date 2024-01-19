// Imports
import React, { useEffect } from 'react';
import { icons } from '../../../../utils/icons.util';
import { Icon } from '@iconify/react';


// Message Send Button
function MessageSendButton({  }) {

  return (
    <button
      className='w-auto h-full px-6 rounded-md text-xl text-white bg-main-color hover:bg-main-color-hover'>
      <Icon icon={icons.messageSender} />
    </button>
  );
}


// Export
export default React.memo(MessageSendButton);