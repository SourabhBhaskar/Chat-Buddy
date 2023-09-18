import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AllContactListContext, RecentContactListContext } from '../context/contactList';
import { InChatRoomContactContext } from '../context/chatRoomContext';
import { socket } from '../services/socketIO';
import dp from '../assets/dp.png';


// Status
function AllContact({ Contact }){
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { recentContactList, setRecentContactList } = useContext(RecentContactListContext);
  const navigate = useNavigate();

  function handleClick(){
    setInChatRoomContact({...Contact});
    setRecentContactList([Contact, ...recentContactList]);
    navigate('/chatroom');
  }

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage(message) {
      if(message.senderId !== Contact.email)
        return;
      const newMessage = [message.message, 'received'];
      Contact.messages.push(newMessage);
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, [inChatRoomContact]); 

  return (
    <div className='w-auto h-full flex flex-col justify-center items-center gap-2 cursor-pointer' onClick={ handleClick }>
      <div className='w-[95px] h-auto flex justify-center'>         
        <img className='w-[60px] h-[60px] rounded-full ' src={Contact.profilePic ? Contact.profilePic : dp} alt={Contact.name} />
      </div>
      <p className={`w-[80px] text-center text-sm ${Contact.name.length>=10 ? 'truncate' : ''}`}>{Contact.name}</p>
    </div>
  );
}



// Status list
function AllContactList() {
  const { allContactList, setAllContactList } = useContext(AllContactListContext);

  return (
    <div className='w-full h-[20%] flex flex-col justify-center text-white pl-1'>
      <h1 className='text-lg font-[500]'>All Contacts</h1>
      <div className='w-full h-full flex justify-between overflow-scroll relative'>
      {
        allContactList.map((value, index)=> <AllContact key={index} Contact={value} />)
      }
      </div>
    </div>
  )
}

export default AllContactList;