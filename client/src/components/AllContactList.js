import React, {  } from 'react';
import SearchChat from './Search';
import AddContact from './AddContact';
import { useSelector, useDispatch } from 'react-redux';
import { setChatRoomContact } from '../context/ContactStates';
import { toggleChatMode } from '../context/ChatMode';
import { addNewChat } from '../context/ContactStates';


// Menu
function Menu(){
  return (
    <div className='text-[#a6b0cf]'>
      <i className="fa-solid fa-ellipsis-vertical text-xs rounded-lg"></i>
    </div>
  );
}


// Contact
const Contact = React.memo(({ Index, List }) => {
  // Hooks and Constent
  const dispatch = useDispatch();

  // Data
  const name = List[Index].username;
  let newAlpabet = false;

  // Sorting
  if(Index === 0)
    newAlpabet = List[0].username.slice(0,1).toUpperCase();
  else if(Index){
    const currAlphabet = List[Index].username.slice(0,1).toUpperCase();
    const prevAlphabet = List[Index-1].username.slice(0,1).toUpperCase();
    newAlpabet = currAlphabet !== prevAlphabet ? currAlphabet : false;
  }

  // Click handler
  function handleClick(){
    dispatch(setChatRoomContact({...List[Index]}));
    dispatch(addNewChat({...List[Index]}));
    dispatch(toggleChatMode(true));
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
})



// Contact List
function AllContactList() {
  const AllContacts = useSelector((state) => state.ContactStatesSlice).all;

  return (
  <div className='w-full h-full absolute flex flex-col p-6 pb-0 bg-[#303841] move'>
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

export default AllContactList;
