import React, {  } from 'react'
import profile from '../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { setChatRoomContact } from '../context/ContactStates';
import { toggleChatMode } from '../context/ChatMode';


// Status
const FavoriteChat = React.memo(({ Contact }) => {
  // Hooks and Constent
  const dispatch = useDispatch();

  // Data
  const name = Contact.username;
  const picture = Contact.profile_picture;

  function handleClick(){
    dispatch(toggleChatMode(true));
    dispatch(setChatRoomContact(Contact))
  }

  return (
    <div className='w-[70px] h-[70px] flex-shrink-0 flex justify-center relative group cursor-pointer' onClick={handleClick}>
      <div className='w-auto h-auto flex justify-center absolute z-50'>         
        <img className='w-[40px] aspect-square rounded-full' src={picture ? picture : profile} alt={name} />
        <div className='w-[10px] h-[10px] rounded-full bg-green-600 absolute top-[28px] right-0 border-2 border-black'></div>
      </div>
      <div className={`w-full h-[50px] absolute bottom-0 rounded-md `}>
         <p className={`w-full text-center text-sm font-medium mx-auto absolute bottom-2 px-2 ${name.length>=7 ? 'truncate' : ''}`}>{name}</p>
      </div>
    </div>
  );
})



// Favorite Chat List
function FavoriteChats() {
  const FavoriteContacts = useSelector((state) => state.ContactStatesSlice).favorite;

  return (
    <div className={`font-bold text-white`}>
      <h1 className='py-4'>Favorite Chats</h1>
      <div className='w-full h-[90px] flex gap-4 overflow-x-scroll'>
        { FavoriteContacts.map((value, index)=> <FavoriteChat key={index} Contact={value} />) }
       </div>
    </div>
  )
}

export default FavoriteChats;