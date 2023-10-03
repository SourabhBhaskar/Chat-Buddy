import React, { } from 'react';
import defaultPicture from '../../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChatMode } from '../../context/ChatMode';
import { setChatRoomContact } from '../../context/ContactStates';



// Recent Chat
const RecentChat = React.memo(({ Contact }) => {
  const dispatch = useDispatch();
  
  // Data
  const picture = Contact.profile_picture;
  const username = Contact.username !== "" ? Contact.username : "Unknown";
  const lastSeen = Contact.last_seen;
  const messages = Contact.messages;
  const seen = Contact.seen;
  const unSeenMsgCnt = Contact.unSeenMsgCnt;
  const lastMsg = messages && messages.length>0 && messages[messages.length-1].message;

  // handleClick
  function handleClick(){
    dispatch(setChatRoomContact(JSON.stringify(Contact)));
    dispatch(toggleChatMode(true));
  }

  // Component
  return (
    <div className={`w-full h-[70px] flex items-center justify-center gap-2 cursor-pointer transition-all px-2 rounded-md`} onClick={handleClick}>
      <img src={picture ? picture : defaultPicture} alt={username} className='w-[50px] h-[50px] rounded-full' />
      <div className='h-full flex justify-center flex-col flex-grow overflow-hidden'>
        <div className='flex justify-between'>
          <p className='w-auto truncate font-medium'>{username}</p>
          <p className='w-auto opacity-100 text-xs font-medium text-gray-400'>{lastSeen}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm text-gray-400'>{lastMsg}</p>
          {seen && <div className="flex justify-center items-center bg-[#ef476f22] text-[#ef476f] h-full aspect-square rounded-full text-xs p-1">{unSeenMsgCnt}</div>}
        </div>
      </div>
    </div>
  )
});




// Recent Chats List
const RecentChats = ({ List }) => {

  return (
    <section className='w-full h-full absolute overflow-scroll hide-scrollbar'> 
      <h1 className='font-bold'>Recent Chats</h1>
      <div className='pt-6'>
        { List.map((value, index) => (<RecentChat key={index} Contact={value}/>)) }
      </div>
    </section>
  );
}

export default RecentChats;