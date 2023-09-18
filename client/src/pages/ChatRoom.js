import React from 'react';
import InChatRoomContact from '../components/InChatRoomContact';
import ChatBox from '../components/ChatBox';
import SendMessage from '../components/SendMessage';



function ChatRoom() {
  return (
    <main className='w-full h-full flex flex-col bg-blue-600'>
        <InChatRoomContact />
        <ChatBox />
        <SendMessage />
    </main>
  )
}

export default ChatRoom ;