import React from 'react'
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import defaultPicture from '../../../../assets/profile.jpg';
import { setCurrentConnection } from '../../../../context/Connections/Connections.slice';
import { setIsChatRoomOpen } from '../../../../context/Boolean/booleanSlice';


// Contact
const FavoriteChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const { username, profile_picture, last_seen } = value;
  const pictureToDisplay = profile_picture ? profile_picture : defaultPicture;

  function handleClick(){
    dispatch(setIsChatRoomOpen(true));
    dispatch(setCurrentConnection(value))
  }

  return (
    <div className='w-[70px] h-[70px] flex-shrink-0 flex justify-center relative group cursor-pointer' onClick={handleClick}>
      <div className='w-auto h-auto flex justify-center absolute z-10'>         
        <img className='w-[40px] aspect-square rounded-full' src={pictureToDisplay} alt={username} />
        <div className='absolute right-0 bottom-0'>
          <Icon icon="pajamas:status-active" className={`text-[11px] border-2 border-black rounded-full ${last_seen === 'online' || last_seen === 'typing...' ? 'text-green-400' : 'text-red-600'}`}/>
        </div>
      </div>
      <div className='w-full h-[50px] absolute bottom-0 rounded-md bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color'>
         <p className={`w-full text-center text-sm font-medium mx-auto absolute bottom-2 px-2 animate-box text-l-primary-hoverTxt-color dark:text-d-primary-txt-color ${username.length>=7 && 'truncate'}`}>{username}</p>
      </div>
    </div>
  );
})



// Favorite Chat List
function FavoriteChats({ List, children }) {
  return (
    <div className=''>
      <h1 className='py-4 font-semibold text-l-primary-hoverTxt-color dark:text-d-primary-txt-color'>Favorite Chats</h1>
      <div className='w-full h-[90px] flex gap-4 overflow-x-scroll hide-scrollbar'>
        { List.length 
        ? List.map((value, index) => <FavoriteChat key={index} value={value} />)
        : children}
      </div>
    </div>
  )
}

export default React.memo(FavoriteChats);