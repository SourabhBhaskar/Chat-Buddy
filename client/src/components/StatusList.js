import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContactListContext } from '../context/contactList';
import { InChatRoomContactContext } from '../context/chatRoomContext';
import { socket } from '../services/socketIO';
import dp from '../assets/dp.png';


// Status
function Status({ Contact }){

  return (
    <div className='w-auto h-full flex flex-col justify-center items-center gap-2 cursor-pointer'>
      <div className='w-[95px] h-auto flex justify-center'>         
        <img className='w-[60px] h-[60px] rounded-full ' src={Contact.profile_picture ? Contact.profile_picture : dp} alt={Contact.username} />
      </div>
      <p className={`w-[80px] text-center text-sm ${Contact.username.length>=10 ? 'truncate' : ''}`}>{Contact.username}</p>
    </div>
  );
}



// Status list
function StatusList() {
  const { contactList, setContactList } = useContext(ContactListContext);

  return (
    <div className='w-full h-[20%] flex flex-col justify-center text-white pl-1'>
      <h1 className='text-lg font-[500]'>Status</h1>
      <div className='w-full h-full flex justify-between overflow-scroll relative'>
      {
        contactList.map((value, index)=> <Status key={index} Contact={value} />)
      }
      </div>
    </div>
  )
}

export default StatusList;