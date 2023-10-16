import React from 'react';
import { useSelector } from 'react-redux';
import ChatRoomNav from './ChatRoomNav';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';



function ChatRoom() {
  const contacts = useSelector((state) => state.ContactStatesSlice).contacts;
  const currContactIndex = useSelector((state) => state.ContactStatesSlice).currContactIndex;
  const currContact = contacts[currContactIndex];

  return (
    <section className='w-full h-full relative flex flex-col'>
      <ChatRoomNav User={currContact}/>
      <ChatBox User={currContact}/>
      <SendMessage User={currContact}/>
    </section>
  )
}

export default ChatRoom ;