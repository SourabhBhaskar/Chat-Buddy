import React, { useRef, useEffect, useContext } from 'react';
import { InChatRoomContactContext, InChatRoomMessagesContext } from '../context/chatRoomContext';
import { emitMessage } from '../services/socketIO';
import { myProfile } from '../context/myProfile';


// Message Input
function Input({ inputRef }) {
  return (
    <input type='text' placeholder='Type a message' className='w-[90%] h-[70%] text-lg px-5 rounded-l-full bg-white' ref={inputRef} />
  );
}


// Send Button
function Send({ inputRef }){
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { inChatRoomMessages, setInChatRoomMessages } = useContext(InChatRoomMessagesContext);

  function handleSendMessage() {
    const trimmedInput = inputRef.current.value.trim();
    if (trimmedInput === '')  return;


    const newMessage = [trimmedInput, 'sent'];
    setInChatRoomMessages([...inChatRoomMessages, newMessage]);
    inChatRoomContact.messages.push(newMessage);
    emitMessage(trimmedInput, myProfile.email, inChatRoomContact.email);
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
    <span className="material-symbols-outlined w-[10%] h-[70%] px-2 cursor-pointer rounded-r-full bg-white flex items-center justify-center text-blue-600" onClick={handleSendMessage}>send</span>
  );
}



// Message Input Bar
export default function SendMessage() {
  const inputRef = useRef(null); 

  return (
    <div className='w-full h-[10%] flex items-center px-1'>
      <Input inputRef={inputRef} /> 
      <Send inputRef={inputRef} /> 
    </div>
  );
}

