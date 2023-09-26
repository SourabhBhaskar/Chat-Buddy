import React, { useEffect, useRef } from 'react';
import { socket } from '../services/socketIO';
import { Message } from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { setChatBoxMessages, updateChatBoxMessages } from '../context/ChatBoxMessages';


// ChatRoom
function ChatBox() {
  const currRef = useRef(null)
  const dispatch = useDispatch();
  const ChatRoomContact = useSelector((state) => state.ChatRoomContactSlice);
  const ChatBoxMessages = useSelector((state) => state.ChatBoxMessagesSlice);

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage({ senderProfile, message }) {
      const newMessage = [message, 'received'];
      // if(senderProfile.email === ChatRoomContact.email)
        // dispatch(updateChatBoxMessages(((prevMessages) => [...prevMessages, newMessage])));
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, [ChatRoomContact]); 

  
  // Render messages of new click receiver
  useEffect(()=>{
    dispatch(setChatBoxMessages(ChatRoomContact.messages))
  }, [ChatRoomContact]);


  // Scroll on every new message
  useEffect(() => {
    if(currRef.current)  currRef.current.scrollTop = currRef.current.scrollHeight;
  }, [ChatBoxMessages]);

  return (
    <div ref={currRef} className='flex-grow overflow-y-scroll overflow-x-hidden px-1'>
      { ChatBoxMessages.map((value, index)=> <Message key={index} message={value} />) }
    </div>
  );
}

export default ChatBox;
