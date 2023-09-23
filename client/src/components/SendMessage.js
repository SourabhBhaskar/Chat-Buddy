import React, { useRef, useEffect, useContext } from 'react';
import { InChatRoomContactContext, InChatRoomMessagesContext } from '../context/chatRoomContext';
import { emitMessage } from '../services/socketIO';
import { myPublicProfile } from '../context/myProfile';


// Message Input
function Input({ inputRef }) {
  return (
    <input type='text' placeholder='Type a message' className='w-[90%] h-[45px] px-5 rounded-l-lg bg-[#fff1] text-white' ref={inputRef} />
  );
}


// Send Button
function Send({ inputRef }){
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { inChatRoomMessages, setInChatRoomMessages } = useContext(InChatRoomMessagesContext);

  function handleSendMessage() {
    const message = inputRef.current.value.trim();
    if (message === '')  
      return;

    const date = new Date();
    const newTime = date.getHours() + ":" + date.getMinutes();
    const newMessage = {
      direction: 'sent',
      time: newTime,
      message: message
    }

    setInChatRoomMessages([...inChatRoomMessages, newMessage]);
    inChatRoomContact.messages.push(newMessage);
    emitMessage(message, myPublicProfile.email, inChatRoomContact.email);
    inputRef.current.value = '';
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter')  handleSendMessage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <span className="material-symbols-outlined flex-shrink-0 w-[10%] sm:w-[80px] lg:w-[90px] h-[45px] px-2 cursor-pointer rounded-r-lg bg-[#fff1] flex items-center justify-center text-blue-600" onClick={handleSendMessage}>send</span>
  );
}



// Message Input Bar
export default function SendMessage() {
  const inputRef = useRef(null); 

  return (
    <div className='w-full h-auto flex-shrink-0 flex items-center p-3 border-t-[1px] border-gray-700'>
      <Input inputRef={inputRef} /> 
      <Send inputRef={inputRef} /> 
    </div>
  );
}

