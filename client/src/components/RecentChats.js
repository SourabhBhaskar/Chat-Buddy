import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext, ChatRoomScreenModeContext } from '../context/Modes';
import { socket } from '../services/socketIO';
import profile from '../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux';
import ChatRoomContact, { Change } from '../context/ChatRoomContact';



// Recent Chat
const RecentChat = ({ Contact }) => {
  const dispatch = useDispatch();
  const { setChatMode } = useContext(ChatRoomScreenModeContext);

  const [curr, setCurr] = useState(false);
  const [seen, setSeen] = useState(false);
  const [newMsgCnt, setNewMsgCnt] = useState(0);
  const [state, setState] = useState(Contact);


  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage({ senderProfile, message }) {
      const newMessage = [message, 'received'];
      const senderId = senderProfile.email;
      if(senderId === state.email) {
        setState({ ...state, messages: [...state.messages, newMessage] });
        Contact.messages.push([message, 'received']);
        setCurr(true);
      }
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, []);

  // Update seen and newMsgCnt when receiver or state.contact changes
  useEffect(() => {
    if (curr && state.email !== ChatRoomContact.email) {
      setSeen(true);
      setNewMsgCnt((prevCount) => prevCount + 1);
    } else{
      setSeen(false);
      setNewMsgCnt(0);
    } 
  }, [state]);
  
  // Change the receiver on click and reset messege and seen
  function handleClick(){
    dispatch(Change(Contact));
    setNewMsgCnt(0);
    setSeen(false);
    setCurr(false);
    setChatMode(true);
  }

  return (
    <div className={`w-full h-[70px] flex items-center justify-center gap-2 cursor-pointer transition-all px-2 rounded-md`} onClick={handleClick}>
      <img src={Contact.profile_picture ? Contact.profile_picture : profile} alt={Contact.username} className='w-[50px] h-[50px] rounded-full' />
      <div className='h-full flex justify-center flex-col flex-grow overflow-hidden'>
        <div className='flex justify-between'>
          <p className='w-auto truncate font-medium'>{Contact.username}</p>
          <p className='w-auto opacity-100 text-xs font-medium text-gray-400'>{Contact.last_seen}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm text-gray-400'>{Contact.messages && Contact.messages.length > 0 && Contact.messages[Contact.messages.length - 1][0]}</p>
          {seen && <div className="flex justify-center items-center bg-[#ef476f22] text-[#ef476f] h-full aspect-square rounded-full text-xs p-1">{newMsgCnt}</div>}
        </div>
      </div>
    </div>
  )
}



// Recent Chats List
export default function RecentChats() {
  const RecentContacts = useSelector((state) => state.RecentContactsSlice);

  return (
    <section className='w-full h-full absolute overflow-scroll hide-scrollbar'> 
      <h1 className='font-bold'>Recent Chats</h1>
      <div className='pt-6'>
        { RecentContacts.map((value, index) => (<RecentChat key={index} Contact={value} />)) }
      </div>
    </section>
  );
}