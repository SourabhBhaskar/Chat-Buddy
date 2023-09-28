import React, { useEffect, useRef } from 'react';
import { Message } from './Message';
import { useSelector } from 'react-redux';


// Chat Box
const ChatBox = () => {
  const currRef = useRef(null)
  const ChatBoxMessages = useSelector((state) => state.ContactStatesSlice).chatBoxMessages;

  // Scroll on every new message
  useEffect(() => {
    if(currRef.current)  
      currRef.current.scrollTop = currRef.current.scrollHeight;
  }, [ChatBoxMessages]);

  return (
    <div ref={currRef} className='flex-grow overflow-y-scroll overflow-x-hidden px-1'>
      { ChatBoxMessages.map((value, index)=> <Message key={index} message={value} />) }
    </div>
  );
}

export default ChatBox;


