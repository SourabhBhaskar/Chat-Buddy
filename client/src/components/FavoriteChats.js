import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContactListContext } from '../context/contactList';
import { InChatRoomContactContext } from '../context/chatRoomContext';
import { socket } from '../services/socketIO';
import profile from '../assets/profile.jpg';
import { DarkModeContext } from '../context/Modes';


// Status
function FavoriteChat({ Contact }){
  const { mode } = useContext(DarkModeContext);
  const darkMode = mode ? 'bg-[#a6b0cf11] group-hover:bg-[#a6b0cf22]' : 'bg-[#a6b0cf22] group-hover:bg-[#a6b0cf33]';
  const name = Contact.username;
  const picture = Contact.profile_picture;

  return (
    <div className='w-[70px] h-[70px] flex-shrink-0 flex justify-center relative group cursor-pointer'>
      <div className='w-auto h-auto flex justify-center absolute z-50'>         
        <img className='w-[40px] aspect-square rounded-full' src={picture ? picture : profile} alt={name} />
        <div className='w-[10px] h-[10px] rounded-full bg-green-600 absolute top-[28px] right-0 border-2 border-black'></div>
      </div>
      <div className={`w-full h-[50px] absolute bottom-0 rounded-md ${darkMode}`}>
         <p className={`w-full text-center text-sm font-medium mx-auto absolute bottom-2 px-2 ${name.length>=7 ? 'truncate' : ''}`}>{name}</p>
      </div>
    </div>
  );
}



// Status list
function FavoriteChats() {
  const { mode, setMode } = useContext(DarkModeContext);
  const darkMode = mode ? 'text-white' : 'text-black';
  const { contactList, setContactList } = useContext(ContactListContext);
  
  return (
    <div className={`font-bold ${darkMode}`}>
      <h1 className='py-4'>Favorite Chats</h1>
      <div className='w-full h-[90px] flex gap-4 overflow-x-scroll'>
        { contactList.map((value, index)=> <FavoriteChat key={index} Contact={value} />) }
       </div>
    </div>
  )
}

export default FavoriteChats;