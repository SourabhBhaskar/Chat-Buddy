import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import AddContact from './AddContact';
import { setAddContact } from '../../context/NavigateModes';



function ContactHeading() {
  const dispatch = useDispatch();
  const addContact = useSelector((state) => state.NavigateModesSlice).addContact;

  function handleClick(){
    dispatch(setAddContact(true));
  }
  
  return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-xl font-[600]'>Contacts</h1>
        <Icon onClick={handleClick} icon="mdi:user-add-outline" className='text-xl font-bold text-[#a6b0cf] hover:text-white transition-all' />
        { addContact && <AddContact /> }
    </div>
  )
}

export default ContactHeading