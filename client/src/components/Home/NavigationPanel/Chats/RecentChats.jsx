import React from 'react';
import defaultPicture from '../../../../assets/profile.jpg';
import {  useDispatch } from 'react-redux';
import { setChatRoom } from '../../../../context/GlobalContext/global.slice';
import { setCurrentConnection } from '../../../../context/ConnectionsContext/connections.slice';


// Recent Chat
const RecentChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const { username, profile_picture, last_seen } = value.bio;
  const { unSeenMsgCnt, messageList } = value.messages;
  const isOnline = last_seen === 'online' || last_seen === 'typing...' ? true : false;
  const lastMessage = messageList[messageList.length-1].message || "";

  // handleClick
  function handleClick(){
    dispatch(setChatRoom(true));
    dispatch(setCurrentConnection({ connectionId: value.bio.email }));
  }

  return (
    <div onClick={handleClick} className='w-full h-[75px] flex items-center px-4 rounded-md hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover transition-all'>
      <div className={`w-[40px] h-[40px] rounded-full overflow-hidden relative mr-4 ${!profile_picture && 'load-picture'}`}>
        <img src={profile_picture || defaultPicture} className='w-full h-full rounded-full' />
      </div>
      <div className='flex-grow h-full relative border-b-[1px] border-primary-light dark:border-primary-dark'>
        <div className='w-full h-full absolute flex flex-col justify-center'>
          <h1 className='w-full truncate text font-semibold text-primary-light dark:text-primary-dark'>{username}</h1>
          <p className='w-full truncate text-sm text-secondary-light dark:text-secondary-dark'>{lastMessage}</p>
        </div>
      </div>
      <ul className='h-full aspect-square flex flex-col justify-center items-center gap-2 border-b-[1px] border-primary-light dark:border-primary-dark'>
        <li className={`${ isOnline ? 'text-[13px] text-green-600' : 'text-[12px] text-secondary-light dark:text-secondary-dark'}`}>{last_seen}</li>
        { unSeenMsgCnt !== 0 && <li className='text-xs px-1 rounded-full text-[#ef476f] bg-[#ef476f22]'>{unSeenMsgCnt}</li>}
      </ul>
    </div>
  )
}); 



// Recent Chats List
function RecentChats({ List }){
  return (
    <section className='flex-grow flex flex-col'>
      <h1 className='py-2 font-bold text-primary-light dark:text-primary-dark'>Recent Chats</h1>
      <div className='flex-grow relative'>
        <div className='w-full h-full absolute py-1 overflow-scroll hide-scrollbar'>
          { List.map((value, index) => <RecentChat key={value.bio.email} value={value}/>)}
        </div>
      </div>
    </section>
  );
};


export default React.memo(RecentChats);


