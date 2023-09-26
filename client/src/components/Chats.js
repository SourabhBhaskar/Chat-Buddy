import React, { useContext } from 'react';
import { DarkModeContext } from '../context/Modes';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Heading from './Heading';
import SearchChat from './Search';



// Chats
function Chats() {
  const { mode, setMode } = useContext(DarkModeContext);
  const darkMode = mode ? 'bg-[#303841]' : 'bg-white';

  return (
    <main className={`w-full h-full absolute flex flex-col p-6 move ${darkMode}`}>
      <section className='relative' ><Heading text={"Chats"}/></section>
      <section className='relative' ><SearchChat placeholder={"Search for a chat..."} /></section>
      <section className='relative' ><FavoriteChats /></section>
      <section className='flex-grow relative' ><RecentChats /></section>
    </main>
  )
}

export default Chats;

