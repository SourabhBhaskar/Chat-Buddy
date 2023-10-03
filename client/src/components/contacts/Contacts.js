import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactHeading from './ContactHeading';
import Search from '../common_/Search';
import AllContactList from './AllContactList';


function Contacts() {
  const [ search, setSearch ] = useState(false);
  const [ list, setList ] = useState([]);
  const all = useSelector((state) => state.ContactStatesSlice).all;

  return (
    <main className='w-full h-full absolute flex flex-col px-2 pt-6 sm:p-6 pb-0 bg-[#303841] move'>
        <ContactHeading />
        <Search placeholder={"Search for contact"} key={"contacts"} ListName={"all"} List={{list, setList}} Search={{search, setSearch}}/>
        <AllContactList List={search ? list : all}/>
    </main>
  )
}

export default Contacts;