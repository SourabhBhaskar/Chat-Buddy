// Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import defaultPic from '../../../../assets/profile.jpg';
import { setCurrentConnection } from '../../../../context/ConnectionsContext/ConnectionsContext.slice';
import { setIsChatRoomOpen } from '../../../../context/Boolean/booleanSlice';


// Connection
function Connection({ children, value }) {
  const dispatch = useDispatch();
  const { username, profile_picture } = value;

  const handleClick = () => {
    dispatch(setCurrentConnection(value));
    dispatch(setIsChatRoomOpen(true));
  }

  return (
    <div onClick={handleClick} className='w-full p-4 rounded-md flex justify-between items-center hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color'>
      <div className='w-full truncate flex items-center gap-2'>
        <img src={profile_picture || defaultPic} alt='pic' className='w-[40px] aspect-square rounded-full' />
        <h1 className='truncate flex-grow w-full text-l-primary-txt-color dark:text-d-primary-txt-color'>{username}</h1>
      </div>
      {children}
    </div>
  )
}


// Export
export default React.memo(Connection);