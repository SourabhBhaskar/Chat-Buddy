// Imports
import React, { useEffect } from 'react';
import { icons } from '../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { useSendMessage } from '../../../../Hooks/useSendMessage.hook';


// Message Send Button
function MessageSendButton({ inputRef, files, setFiles }) {
  const { sendMessage } = useSendMessage();
  
  const handleSendMessage = () => {
    // Text Message
    const textMessage = inputRef.current.value.trim();
    if(textMessage)
      sendMessage(textMessage);

    // File Message
    if(files.length){
      files.forEach(file => {
        sendMessage(file);
      });
      setFiles([]);
    }

    inputRef.current.value = "";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter")
        handleSendMessage();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [files]);

  return (
    <button
      onClick={handleSendMessage}
      className='h-[45px] px-6 rounded-md text-xl text-white bg-[#7269ef] hover:bg-[#7269efee]'>
      <Icon icon={icons.messageSender} />
    </button>
  );
}


// Export
export default React.memo(MessageSendButton);