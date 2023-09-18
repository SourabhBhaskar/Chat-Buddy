import React, { useContext, useEffect, useState } from 'react';
import { ContactListContext } from '../context/contactList';
import { InChatRoomContactContext } from '../context/chatRoomContext';
import { ScreenModeContext } from '../context/screenMode';
import { socket } from '../services/socketIO';
import dp from '../assets/dp.png';



// Contact
const Contact = ({ Contact }) => {
  const [curr, setCurr] = useState(false);
  const [seen, setSeen] = useState(false);
  const [newMsgCnt, setNewMsgCnt] = useState(0);
  const [state, setState] = useState(Contact);
  const { mode, setMode } = useContext(ScreenModeContext);
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

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
    if (curr && state.email !== inChatRoomContact.email) {
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
    setMode(!mode)
  }

  return (
    <div className='relative w-full h-[80px] flex items-center gap-2 hover:bg-[#0001] rounded-xl px-2 cursor-pointer' onClick={handleClick}>
      <img src={Contact.profile_picture ? Contact.profile_picture : dp} alt={Contact.username} className='w-[60px] h-[60px] rounded-full' />
      <div className='h-full flex justify-center flex-col flex-grow overflow-hidden border-b-[1px] border-[#fff1]'>
        <div className='flex justify-between '>
          <p className='w-auto truncate'>{Contact.username}</p>
          <p className='w-auto text-sm opacity-100 font-sens font-thin'>{Contact.last_seen}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm'>{Contact.messages && Contact.messages.length > 0 && Contact.messages[Contact.messages.length - 1][0]}</p>
          {seen && <div className="flex justify-center items-center bg-blue-600 text-white h-full aspect-square rounded-full text-xs p-1">{newMsgCnt}</div>}
        </div>
      </div>
    </div>
  )
}



// Contact list
export default function ContactList() {
  const { contactList, setContactList } = useContext(ContactListContext);

  // Incomming messages from server
  useEffect(() => {
    function handleIncomingMessage({ senderProfile, message }) {
      const newMessage = [message, 'received'];
      const senderId = senderProfile.email;
      const isExist = contactList.filter((contact)=> contact.email === senderId)

      if(isExist.length === 0){
        if(senderProfile.username === '')
          senderProfile.username = 'Unknown';
        setContactList([senderProfile, ...contactList]);
        contactList = [senderProfile, ...contactList];
        console.log(contactList)
      }
    }
    socket.on('message', handleIncomingMessage);
    return () => socket.off('message', handleIncomingMessage);
  }, []);
  console.log(contactList)
  return (
    <section className='h-[70%] bg-white rounded-t-3xl p-2 overflow-y-scroll'> 
      {contactList.length!=0 && contactList.map((value, index) => (<Contact key={index} Contact={value} />))}
    </section>
  );
}