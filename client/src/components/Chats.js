import React, { useContext } from 'react';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Heading from './Heading';
import SearchChat from './Search';



// Chats
function Chats() {
  return (
    <main className={`w-full h-full absolute flex flex-col p-6 move bg-inherit shadow-md`}>
      <section className='relative' ><Heading text={"Chats"}/></section>
      <section className='relative' ><SearchChat placeholder={"Search for a chat..."} /></section>
      <section className='relative' ><FavoriteChats /></section>
      <section className='flex-grow relative' ><RecentChats /></section>
    </main>
  )
}

export default Chats;

