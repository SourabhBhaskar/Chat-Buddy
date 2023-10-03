import React from 'react';
import AddContact from './AddContact';


function ContactHeading({ children }) {
  return (
    <div className='w-full flex justify-between items-center pr-4'>
        <h1 className='text-xl font-[600]'>Contacts</h1>
        <AddContact />
    </div>
  )
}

export default ContactHeading