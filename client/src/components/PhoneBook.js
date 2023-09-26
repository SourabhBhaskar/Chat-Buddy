import { useContext, useState } from 'react';
import SearchChat from './Search';
import AddContact from './AddContact';
import { ChatRoomScreenModeContext } from '../context/Modes';
import { useSelector, useDispatch } from 'react-redux';
import { Change } from '../context/ChatRoomContact';


// Menu
function Menu(){
  return (
    <div className='text-[#a6b0cf]'>
      <i className="fa-solid fa-ellipsis-vertical text-xs rounded-lg"></i>
    </div>
  );
}


// Contact
function Contact({ Index, List }){
  const dispatch = useDispatch();
  const { setChatMode } = useContext(ChatRoomScreenModeContext);

  const name = List[Index].username;
  let newAlpabet = false;

  if(Index === 0)
    newAlpabet = List[0].username.slice(0,1).toUpperCase();
  else if(Index){
    const currAlphabet = List[Index].username.slice(0,1).toUpperCase();
    const prevAlphabet = List[Index-1].username.slice(0,1).toUpperCase();
    newAlpabet = currAlphabet !== prevAlphabet ? currAlphabet : false;
  }

  function handleClick(){
    setChatMode(true);
    dispatch(Change({...List[Index]}));
  }

  return (
    <>
      { newAlpabet && <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px] my-4 px-2'>{newAlpabet}</h1> }
      <div className='w-full h-[44px] flex justify-between items-center text-[15px] font-[500] hover:bg-[#a6b0cf11] px-4' onClick={handleClick}>
        <p>{name}</p>
        <Menu />
      </div>
    </>
  );
}



// Contact List
function ContactList() {
  const AllContacts = useSelector((state) => state.AllContactsSlice);

  return (
  <div className='w-full h-full absolute flex flex-col p-6 pb-0 bg-[#303841] z-50 move'>
      <div className='w-full flex justify-between items-center pr-4'>
        <h1 className='text-xl font-[600]'>Contacts</h1>
        <AddContact />
      </div>
      <SearchChat placeholder={"Search for a contact..."} />
      <div className='flex-grow overflow-scroll'>
        {AllContacts.map((value, index)=><Contact key={index} Index={index} List={ AllContacts }  />)}
      </div>
    </div>
  )
}

export default ContactList;
