import React, { useEffect } from 'react';
import { icons } from '../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { useSendMessage } from '../../../../Hooks/socket/useSendMessage.hook';


function MessageSendButton({ value, onChange }) {
  const { sendMessage } = useSendMessage();

  const handleSendMessage = () => {
    const messageValue = value.trim();
    if(messageValue){
      sendMessage(messageValue);
    }
    onChange('');
  }

  useEffect(() => {
    const handleEnterKey = (e) => {
      if(e.key === 'Enter')
        handleSendMessage();
    }

    window.addEventListener('keydown', handleEnterKey)
    return () => window.removeEventListener('keydown', handleEnterKey);
  }, [value])

  return (
    <button
      onClick={handleSendMessage}
      className='w-auto h-full px-6 rounded-md text-xl text-white bg-main-color hover:bg-main-color-hover'>
      <Icon icon={icons.messageSender} />
    </button>
  );
}


// Export
export default MessageSendButton;