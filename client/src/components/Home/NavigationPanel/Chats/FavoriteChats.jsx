import React from 'react'
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import defaultPicture from '../../../../assets/profile.jpg';
import { setChatRoom } from '../../../../context/GlobalContext/global.slice';
import { setCurrentConnection } from '../../../../context/ConnectionsContext/connections.slice';


// Contact
const FavoriteChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const { username, profile_picture, last_seen } = value;

  function handleClick(){
    dispatch(setChatRoom(true));
    dispatch(setCurrentConnection(value.email))
  }

  return (
    <div onClick={handleClick} className='w-[70px] aspect-square relative flex-shrink-0 flex flex-col items-center cursor-pointer group'>
        <div className='w-[40px] aspect-square absolute z-10 overflow-hidden'>
          <div className={`w-full h-full rounded-full overflow-hidden relative ${ !profile_picture && 'load-picture' }`}>
            <img src={profile_picture || defaultPicture} className='w-full h-full rounded-full' />
          </div>
          <Icon icon={icons.status2} fontSize={10} className={`absolute bottom-0 right-0 rounded-full border-2 border-black ${ last_seen === 'online' || last_seen === 'typing...' ? 'text-green-400' : 'text-red-400'}`} />
        </div>
      <div className='w-full h-[40px] rounded-[5px] absolute bottom-1 flex items-end p-1 hover:shadow-md transition-all group-hover:bg-gray-300 dark:group-hover:bg-gray-600 bg-primary-light-hover dark:bg-primary-dark-hover'>
        <h1 className='w-full text-sm font-semibold truncate text-center text-primary-light dark:text-primary-dark'>{username}</h1>
      </div>
    </div>
  );
})



// Favorite Chat List
function FavoriteChats({ List }) {

  return (
    <div>
      <h1 className='py-4 font-bold text-primary-light dark:text-primary-dark'>Favorite Chats</h1>
      <div className='w-full h-[80px] flex gap-4 pb-2 overflow-x-scroll hide-scrollbar'>
        {List.map((value, index) => <FavoriteChat key={index} value={value.bio} />)}
      </div>
    </div>
  )
}


export default React.memo(FavoriteChats);