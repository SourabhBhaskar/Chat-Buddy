import React, { } from 'react';
import { useDispatch } from 'react-redux';
import { setChatRoomContact } from '../../context/ContactStates';
import { toggleChatMode } from '../../context/ChatMode';
import ContactMenu from './ContactMenu';




// Contact
const Contact = React.memo(({ Index, List }) => {
  const dispatch = useDispatch();
  const name = List[Index].username;
  let newAlpabet = false;

  // Adding alphabat 
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
    dispatch(toggleChatMode(true));
  }

  return (
    <>
      { newAlpabet && <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px] my-4'>{newAlpabet}</h1> }
      <div className='w-full h-[44px] flex justify-between items-center text-[15px] font-[500] hover:bg-[#a6b0cf11] px-2' onClick={handleClick}>
        <p>{name}</p>
        <ContactMenu />
      </div>
    </>
  );
})



// Contact List
const AllContactList = React.memo(({ List }) => {

  return (
    <div className='flex-grow overflow-scroll'>
      {List.map((value, index)=><Contact key={value.email} Index={index} List={List}  />)}
    </div>
  )
});

export default AllContactList;
