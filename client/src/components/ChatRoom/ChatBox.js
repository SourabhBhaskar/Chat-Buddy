import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { useReceiveMessage } from '../../services/socketIO';


// Chat Box
const ChatBox = ({ User }) => {
  const currRef = useRef(null)
  const UserMessages = User.messages;

  // Scroll on every new message
  useEffect(() => {
    if(currRef.current)  
      currRef.current.scrollTop = currRef.current.scrollHeight;
  }, [UserMessages]);

  return (
    <div ref={currRef} className='flex-grow overflow-y-scroll overflow-x-hidden px-4'>
      { UserMessages.map((value, index)=> <Message key={index} message={value} />) }
    </div>
  );
}

export default ChatBox;


