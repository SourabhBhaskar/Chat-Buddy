import React from 'react';
import ChatRoomNav from './ChatRoomNav';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';



function ChatRoom() {
  return (
    <section className='w-full h-full relative flex flex-col'>
      <ChatRoomNav />
      <ChatBox/>
      <SendMessage/>
    </section>
  )
}

export default ChatRoom ;