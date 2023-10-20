import React from 'react';
import defaultPicture from '../../assets/profile.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { setChatMode } from '../../context/NavigateModes';
import { setProfileCurrent } from '../../context/Profile';


// Recent Chat
const RecentChat = React.memo(({ Contact }) => {
  const dispatch = useDispatch();
  
  // Data
  const picture = Contact.profile_picture ? Contact.profile_picture : defaultPicture;
  const username = Contact.username !== "" ? Contact.username : "Unknown";
  const date = Contact.last_seen.date;
  const time =  Contact.last_seen.time;
  const messages = Contact.messages;
  const seen = Contact.isSeen;
  const unSeenMsgCnt = Contact.unSeenMsgCnt;
  const lastMsg = messages && messages.length>0 && messages[messages.length-1].message;

  // handleClick
  function handleClick(){
    dispatch(setProfileCurrent(Contact));
    dispatch(setChatMode(true));
  }

  // Component
  return (
    <div onClick={handleClick} className='w-full h-[73px] flex items-center gap-3 px-4 hover:bg-[#abb4d211] transition-all rounded-lg'>
      <div className='relative flex-shrink-0'>         
        <img className='w-[40px] aspect-square rounded-full' src={picture} alt={'k'} />
        <div className='w-[10px] h-[10px] rounded-full bg-green-600 absolute top-[28px] right-0 border-[2px] border-black'></div>
      </div>
      <div className='h-[73px] flex-grow flex items-center border-t-[1px] border-gray-700'>
        <div className='flex-grow h-[44px] overflow-hidden'>
          <p className='w-auto truncate font-medium'>{username}</p>
          <p className='w-auto truncate font-medium text-[14px] text-gray-400'>{lastMsg}</p>
        </div>
        <div className='w-auto h-[44px] flex-shrink-0 flex flex-col justify-between items-center'>
          <p className='text-[11px] text-gray-400 text-end'>{time}</p>
          {seen && <p className={`w-[20px] h-[20px] flex justify-center items-center text-[12px] text-[#ef476f] bg-[#ef476f22] rounded-full`}>{unSeenMsgCnt}</p>}
        </div>
      </div>
    </div>
  )
}); 




// Recent Chats List
function RecentChats(){
  const { contacts } = useSelector((state) => state.ProfileSlice);
  const recent = contacts.recent;

  return (
    <section className='w-full h-full absolute overflow-scroll flex flex-col hide-scrollbar'> 
      <h1 className='font-bold py-2'>Recent Chats</h1>
      <div className='w-full flex-grow overflow-scroll hide-scrollbar'>
        { recent.map((value, index) => (<RecentChat key={index} Contact={value}/>)) }
      </div>
    </section>
  );
};

export default RecentChats;