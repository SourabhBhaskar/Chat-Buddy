import React, { useContext, useState, useEffect, useRef } from 'react';
import { socket } from '../services/socketIO';
import {  InChatRoomContactContext, InChatRoomMessagesContext } from '../context/chatRoomContext';



// Messages
function Message({ message }) {
  const msg = message[0];
  const dir = message[1];
  const messageClass = (dir === 'sent') ? 'bg-blue-600 text-white rounded-bl-lg' : 'bg-[#0001] rounded-br-lg';

  return (
    <div className={`my-5 flex ${dir === 'sent' ? 'justify-end' : 'justify-start'}`}>
      <p className={`inline-block px-2 py-1 rounded-t-lg max-w-[60%] overflow-hidden ${messageClass}`}>{msg}</p>
    </div>
  );
}


// ChatRoom
function ChatBox() {
  const currRef = useRef(null)
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { inChatRoomMessages, setInChatRoomMessages } = useContext(InChatRoomMessagesContext);

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage(message) {
      console.log(message)
      const newMessage = [message.message, 'received'];
      setInChatRoomMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log(message.senderId)
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
    <div ref={currRef} className='w-full h-[80%] overflow-y-scroll overflow-x-hidden pl-1 bg-white'>
      {inChatRoomContact && inChatRoomMessages && inChatRoomMessages.map((value, index)=> <Message key={index} message={value} />)}
    </div>
  );
}

export default ChatBox;
