import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FavoriteChats from './FavoriteChats';
import RecentChats from './RecentChats';
import Heading from '../common_/Heading';
import Search from '../common_/Search';
import { DummyContactList } from '../../context/DummyData';



// Chats
function Chats() {
  const contacts = useSelector((state) => state.ContactStatesSlice).contacts;
  const recent = contacts.filter((c) => c.isRecent === true);
  const [ search, setSearch ] = useState(false);
  const [ list, setList ] = useState([]);
  const listToDisplay = search ? list : recent;

  return (
    <main className={`w-full h-full absolute flex flex-col move bg-inherit shadow-md p-4 pb-0 sm:p-6 sm:pb-0`}>
      <section className='relative' ><Heading text={"Chats"}/></section>
      <section className='relative' ><Search placeholder={"Search for a chat..."} key={"chats"} ListName={"recent"} List={{list, setList}} Search={{search, setSearch}}  /></section>
      <section className='relative' ><FavoriteChats /></section>
      <section className='flex-grow relative'><RecentChats List={listToDisplay}/></section> 
    </main>
  )
}

export default Chats;

