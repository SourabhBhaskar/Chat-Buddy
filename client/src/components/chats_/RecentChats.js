import React from 'react';
import defaultPicture from '../../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { setChatMode } from '../../context/NavigateModes';
import { _chatRoomContact } from '../../context/Profile';


// Recent Chat
const RecentChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  
  // Data
  const email = value.email;
  const name = value.username || 'Unknown';
  const picture = value.profile_picture ? value.profile_picture : defaultPicture;
  const last_seen = value.last_seen;
  const isOnline = value.last_seen === 'online' || value.last_seen === 'typing...' ? true : false;
  const lastMessage = value.lastMessage && value.lastMessage.message;
  const isSeen = value.isSeen;
  const unSeenMsgCnt = value.unSeenMsgCnt;

  // handleClick
  function handleClick(){
    dispatch(_chatRoomContact(email));
    dispatch(setChatMode(true));
  }

  // Component
  return (
    <div onClick={handleClick} className='w-full h-[73px] flex items-center justify-center gap-3 px-4 hover:bg-[#abb4d211] transition-all rounded-lg overflow-hidden'>
      <div className='relative flex-shrink-0'>         
        <img className='w-[40px] aspect-square rounded-full' src={picture} alt={'k'} />
      </div>
      <div className='h-[73px] flex-grow flex items-center border-t-[1px] hover:border-t-0 border-gray-7k00'>
        <div className='w-[15px] flex-grow h-[44px] overflow-hidden'>
          <p className='w-auto truncate font-medium'>{name}</p>
          <p className='w-auto truncate font-medium text-[14px] text-gray-400'>{lastMessage}</p>
        </div>
        <div className='w-[80px] h-[44px] flex-shrink-0 flex flex-col justify-between items-center'>
          <p className={`${isOnline ? 'text-green-600 text-[14px]' : 'text-gray-400 text-[12px]' } text-end`}>{last_seen}</p>
          {isSeen && <div className={`w-full h-full flex justify-center items-center`}>
            <p className='px-[5px] text-[12px] text-[#ef476f] bg-[#ef476f22] rounded-full'>{unSeenMsgCnt}</p>
          </div>}
        </div>
      </div>
    </div>
  )
}); 




// Recent Chats List
function RecentChats(){
  const { contacts } = useSelector((state) => state.ProfileSlice);
  const { contactsMap, recent } = contacts;

  return (
    <section className='w-full h-full absolute overflow-scroll flex flex-col hide-scrollbar'> 
      <h1 className='font-bold py-2'>Recent Chats</h1>
      <div className='w-full flex-grow overflow-scroll hide-scrollbar'>
        { recent.map((value, index)=> {
          const key = value.email;
          const keyValue = contactsMap[key];
          const valueToDisplay = { 
            username: keyValue.username, 
            email: keyValue.email,
            profile_picture: keyValue.profile_picture, 
            last_seen: keyValue.last_seen,
            lastMessage: keyValue.messages[keyValue.messages.length-1],
            isSeen: keyValue.isSeen,
            unSeenMsgCnt: keyValue.unSeenMsgCnt
          };
          return <RecentChat key={key} value={valueToDisplay} />
        }) }
      </div>
    </section>
  );
};

export default RecentChats;