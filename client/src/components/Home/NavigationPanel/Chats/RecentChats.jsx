import React from 'react';
import defaultPicture from '../../../../assets/profile.jpg';
import {  useDispatch } from 'react-redux';
import { setIsChatRoomOpen } from '../../../../context/Boolean/booleanSlice';
import { setCurrentConnection } from '../../../../context/ConnectionsContext/ConnectionsContext.slice';


// Recent Chat
const RecentChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const { username, profile_picture, last_seen, unSeenMsgCnt, isSeen, messages } = value;
  const pictureToDisplay = profile_picture ? profile_picture : defaultPicture;
  const isOnline = last_seen === 'online' || last_seen === 'typing...' ? true : false;
  const lastMessage = messages && messages.length ? messages[messages.length-1].message : '';

  // handleClick
  function handleClick(){
    dispatch(setCurrentConnection(value))
    dispatch(setIsChatRoomOpen(true));
  }

  return (
    <div onClick={handleClick} className='w-full h-[73px] flex items-center justify-center gap-3 px-4 transition-all rounded-lg overflow-hidden cursor-pointer hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color'>
      <div className='relative flex-shrink-0'>         
        <img className='w-[40px] aspect-square rounded-full' src={pictureToDisplay} alt={'pic'} />
      </div>
      <div className='h-[73px] flex-grow flex items-center border-t-[1px] border-l-primary-border dark:border-d-primary-border'>
        <div className='w-[15px] flex-grow h-[44px] overflow-hidden'>
          <p className='w-auto truncate font-[500] text-l-primary-txt-color dark:text-d-primary-txt-color'>{username}</p>
          <p className='w-auto truncate text-[14px] font-[400] text-l-secondary-txt-color dark:text-d-secondary-txt-color'>{lastMessage}</p>
        </div>
        <div className='w-[80px] h-[44px] flex-shrink-0 flex flex-col justify-between items-center'>
          <p className={`${ isOnline ? 'text-green-600 text-[13px]' : 'text-l-secondary-txt-color dark:text-d-secondary-txt-color'} text-[11px] text-center`}>{last_seen}</p>
          {!isSeen && <div className={`w-full h-full flex justify-center items-center`}>
            <p className='flex items-center px-1 text-xs text-[#ef476f] bg-[#ef476f22] rounded-full'>{unSeenMsgCnt}</p>
          </div>}
        </div>
      </div>
    </div>
  )
}); 



// Recent Chats List
function RecentChats({ List, children }){

  return (
    <section className='w-full h-full px-4 flex flex-col overflow-hidden'> 
      <h1 className={`py-2 font-semibold flex-shrink-0 text-l-primary-txt-color dark:text-d-primary-txt-color`}>Recent Chats</h1>
      <div className='flex-grow overflow-y-scroll hide-scrollbar'>
        { List.length 
        ? List.map((value, index) => <RecentChat key={index} value={value}/>) 
        : children}
      </div>
    </section>
  );
};

export default React.memo(RecentChats);