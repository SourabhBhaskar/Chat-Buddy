import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Heading from '../common_/Heading';
import Search from '../common_/Search';



// Chats
function Chats() {
  const [ search, setSearch ] = useState(false);
  const [ list, setList ] = useState([]);
  const recent = useSelector((state) => state.ContactStatesSlice).recent;

  return (
    <main className={`w-full h-full absolute flex flex-col px-2 pt-6 sm:p-6 move bg-inherit shadow-md`}>
      <section className='relative' ><Heading text={"Chats"}/></section>
      <section className='relative' ><Search placeholder={"Search for a chat..."} key={"chats"} ListName={"recent"} List={{list, setList}} Search={{search, setSearch}}  /></section>
      <section className='relative' ><FavoriteChats /></section>
      <section className='flex-grow relative'><RecentChats List={search ? list : recent}/></section>
    </main>
  )
}

export default Chats;

