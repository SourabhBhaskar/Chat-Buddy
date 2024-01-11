// Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import defaultPic from '../../../../assets/profile.jpg';
// import { setCurrentConnection } from '../../../../context/Connections/Connections.slice';
// import { setIsChatRoomOpen } from '../../../../context/Boolean/booleanSlice';
// import { socket } from '../../../../socket/socket-client';


// Connection
function Connection({ children, value }) {
  const dispatch = useDispatch();
  const { username, email, profile_picture } = value;

  const handleClick = () => {
    // dispatch(setCurrentConnection(value));
    // dispatch(setIsChatRoomOpen(true));
    // socket.emit('user/status', email);
  }

  return (
    <div onClick={handleClick} className='w-full p-4 rounded-md flex justify-between items-center hover:bg-primary-dark-hover'>
      <div className='w-full truncate flex items-center gap-2'>
        <img src={profile_picture || defaultPic} alt='pic' className='w-[40px] aspect-square rounded-full' />
        <h1 className='truncate flex-grow w-full text-primary-light dark:text-primary-dark font-semibold'>{username}</h1>
      </div>
      {children}
    </div>
  )
}


// Export
export default React.memo(Connection);