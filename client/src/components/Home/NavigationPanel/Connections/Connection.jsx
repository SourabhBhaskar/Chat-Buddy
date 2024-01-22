// Imports
import React from 'react';
import { useDispatch } from 'react-redux';
import defaultPic from '../../../../assets/profile.jpg';
import { setChatRoom } from '../../../../context/GlobalContext/global.slice';
import { setCurrentConnection } from '../../../../context/ConnectionsContext/connections.slice';

// Connection
function Connection({ children, value = {} }) {
  const dispatch = useDispatch();
  const { username, profile_picture, status, email } = value;


  function handleClick(){
    dispatch(setChatRoom(true));
    dispatch(setCurrentConnection({ connectionId: email }));
  }

  return (
    <div onClick={handleClick} className='w-full h-auto p-4 rounded-md flex justify-between items-center gap-2 transition-all cursor-pointer hover:bg-primary-dark-hover'>
      <div className={`w-[40px] h-[40px] flex-shrink-0 relative overflow-hidden rounded-full ${!profile_picture && 'load-picture'}`}>
        <img src={profile_picture || defaultPic} />
      </div>
      <div className='flex-grow h-full truncate'>
        <h1 className='w-full truncate font-semibold text-primary-light dark:text-primary-dark'>{username}</h1>
        <p className='w-full truncate text-sm text-secondary-light dark:text-secondary-dark'>{status}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}


// Export
export default React.memo(Connection);