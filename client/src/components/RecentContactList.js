import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecentContactListContext } from '../context/contactList';
import { InChatRoomContactContext, InChatRoomContactContextProvider } from '../context/chatRoomContext';
import { socket } from '../services/socketIO';
import dp from '../assets/dp.png';



// Contact
const RecentContact = ({ Contact }) => {
  const navigate = useNavigate();
  const [curr, setCurr] = useState(false);
  const [seen, setSeen] = useState(false);
  const [newMsgCnt, setNewMsgCnt] = useState(0);
  const [state, setState] = useState(Contact);
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage(message) {
      const newMessage = [message, 'received'];
      const senderId = message.senderId;
      if(senderId === state.email) {
        setCurr(true);
        setState({ ...state, messages: [...state.messages, newMessage] });
        Contact.messages.push([message.message, 'received']);
      }
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, []);

  // Update seen and newMsgCnt when receiver or state.contact changes
  useEffect(() => {
    if (curr && state.contact !== inChatRoomContact.email) {
      setSeen(true);
      setNewMsgCnt((prevCount) => prevCount + 1);
    } else{
      setSeen(false);
      setNewMsgCnt(0);
    } 
  }, [state]);
  
  // Change the receiver on click and reset messege and seen
  function handleClick(){
    setInChatRoomContact({...Contact});
    setNewMsgCnt(0);
    setSeen(false);
    setCurr(false);
    navigate('/chatroom')
  }

  return (
    <div className='relative w-full h-[80px] flex items-center gap-2 hover:bg-[#0001] rounded-xl px-2 cursor-pointer' onClick={handleClick}>
      <img src={Contact.profilePic ? Contact.profilePic : dp} alt={Contact.name} className='w-[60px] h-[60px] rounded-full' />
      <div className='h-full flex justify-center flex-col flex-grow overflow-hidden border-b-[1px] border-[#fff1]'>
        <div className='flex justify-between '>
          <p className='w-auto truncate'>{Contact.name}</p>
          <p className='w-auto text-sm opacity-100 font-sens font-thin'>{Contact.status}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm'>{Contact.messages && Contact.messages.length > 0 && Contact.messages[Contact.messages.length - 1][0]}</p>
          {seen && <div className="flex justify-center items-center bg-blue-600 h-full aspect-square rounded-full text-xs p-1">{newMsgCnt}</div>}
        </div>
      </div>
    </div>
  )
}


// Contact list
export default function RecentContactList() {
  const { recentContactList, setRecentContactList } = useContext(RecentContactListContext);
  return (
    <div className='h-[70%] bg-white rounded-t-3xl p-2 overflow-y-scroll'> 
      {recentContactList.length!=0 && recentContactList.map((value, index) => (<RecentContact key={index} Contact={value} />))}
    </div>
  );
}
