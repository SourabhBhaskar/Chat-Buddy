import React from 'react'
import ContactsNav from '../components/ContactsNav';
import AllContactList from '../components/AllContactList';
import RecentContactList from '../components/RecentContactList';
import AddContact from '../components/AddContact';



function Contacts() {

  return (
    <main className='bg-blue-600 w-full h-full flex flex-col relative'>
      <ContactsNav />
      <AllContactList />
      <RecentContactList />
      <AddContact />
    </main>
  )
}

export default Contacts;