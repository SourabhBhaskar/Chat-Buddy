import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Message } from './Message';


// Chat Box
function ChatBox(){
  const { chatRoomContact } = useSelector((state) => state.ProfileSlice);
  const messages = chatRoomContact.messages ? chatRoomContact.messages : [];
  const currRef = useRef(null)

  // Scroll on every new message
  useEffect(() => {
    if(currRef.chatRoomContact)  
      currRef.chatRoomContact.scrollTop = currRef.chatRoomContact.scrollHeight;
  }, [messages]);

  return (
    <div ref={currRef} className='flex-grow overflow-y-scroll overflow-x-hidden px-4'>
      { messages.map((value, index)=> <Message key={index} message={value} />) }
    </div>
  );
}

export default ChatBox;


