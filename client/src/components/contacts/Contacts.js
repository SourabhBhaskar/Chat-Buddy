import React from 'react';
import ContactHeading from './ContactHeading';
import Search from '../Common/Search';
import AllContactList from './AllContactList';


function Contacts() {
  return (
    <main className='w-full h-full absolute flex flex-col px-2 pt-6 sm:p-6 pb-0 bg-[#303841] '>
        <ContactHeading />
        <Search placeholder={"Search for contact"} key={"contacts"}/>
        <AllContactList  />
    </main>
  )
}

export default React.memo(Contacts);