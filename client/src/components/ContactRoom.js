import React from 'react'
import HomeNav from './HomeNav';
import ContactList from './ContactList';
import StatusList from './StatusList';
import AddContact from './AddContact';



function ContactRoom() {

  return (
    <section className='bg-blue-600 w-full h-full flex flex-col relative'>
      <HomeNav />
      <StatusList />
      <ContactList />
      <AddContact />
    </section>
  )
}

export default ContactRoom;