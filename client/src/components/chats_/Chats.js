import React from 'react';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Heading from '../Common/Heading';
import Search from '../Common/Search';



// Chats
function Chats() {
  return (
    <main className={`w-full h-full absolute flex flex-col move bg-inherit shadow-md p-4 pb-0 sm:p-6 sm:pb-0`}>
      <section className='relative' ><Heading text={"Chats"}/></section>
      <section className='relative' ><Search placeholder={"Search for a chat..."} key={"chats"}  /></section>
      <section className='relative' ><FavoriteChats /></section>
      <section className='flex-grow relative'><RecentChats /></section> 
    </main>
  )
}

export default React.memo(Chats);

