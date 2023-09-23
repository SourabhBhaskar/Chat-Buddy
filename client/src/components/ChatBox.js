import React, { useContext, useState, useEffect, useRef } from 'react';
import { socket } from '../services/socketIO';
import {  InChatRoomContactContext, InChatRoomMessagesContext } from '../context/chatRoomContext';
import { Message } from './Message';




// ChatRoom
function ChatBox() {
  const currRef = useRef(null)
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { inChatRoomMessages, setInChatRoomMessages } = useContext(InChatRoomMessagesContext);

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage({ senderProfile, message }) {
      const newMessage = [message, 'received'];
      if(inChatRoomContact && senderProfile.email === inChatRoomContact.email)
        setInChatRoomMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, [inChatRoomContact]); 

  
  // Render messages of new click receiver
  useEffect(()=>{
    setInChatRoomMessages(inChatRoomContact && Array.from(inChatRoomContact.messages));
  }, [inChatRoomContact]);


  // Scroll on every new message
  useEffect(() => {
    if(currRef.current)  currRef.current.scrollTop = currRef.current.scrollHeight;
  }, [inChatRoomMessages]);

  return (
    <div ref={currRef} className='w-full flex-grow overflow-y-scroll overflow-x-hidden px-1'>
      {inChatRoomContact && inChatRoomMessages && inChatRoomMessages.map((value, index)=> <Message key={index} message={value} />)}
    </div>
  );
}

export default ChatBox;
