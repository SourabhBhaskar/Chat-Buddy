import React, {  } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setChatMode } from '../../context/NavigateModes';
import { _chatRoomContact } from '../../context/Profile';
import defaultPicture from '../../assets/profile.jpg';
import { sortArrayOfObjectsByName } from '../../services/sorting';


// Contact
const FavoriteChat = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const email = value.email;
  const name = value.username;
  const picture = value.profile_picture ? value.profile_picture : defaultPicture;
  const last_seen = value.last_seen === 'online' || value.last_seen === 'typing...' ? true : false;

  function handleClick(){
    dispatch(setChatMode(true));
    dispatch(_chatRoomContact(email));
  }

  return (
    <div className='w-[70px] h-[70px] flex-shrink-0 flex justify-center relative group cursor-pointer' onClick={handleClick}>
      <div className='w-auto h-auto flex justify-center absolute z-50'>         
        <img className='w-[40px] aspect-square rounded-full' src={picture} alt={name} />
        <div className={`${last_seen ? 'bg-green-600' : 'bg-red-600'} w-[10px] h-[10px] rounded-full absolute top-[28px] right-0 border-2 border-black`}></div>
      </div>
      <div className={`w-full h-[50px] absolute bottom-0 rounded-md bg-[#a6b0cf11] hover:bg-[#a6b0cf22]`}>
         <p className={`w-full text-center text-sm font-medium mx-auto absolute bottom-2 px-2 ${name.length>=7 ? 'truncate' : ''}`}>{name}</p>
      </div>
    </div>
  );
})



// Favorite Chat List
function FavoriteChats() {
  const { contacts } = useSelector((state) => state.ProfileSlice);
  const { contactsMap, favorite } = contacts;
  const sortedFavorite = sortArrayOfObjectsByName(favorite);
  return (
    <div className={`font-bold text-white`}>
      <h1 className='py-4'>Favorite Chats</h1>
      <div className='w-full h-[90px] flex gap-4 overflow-x-scroll'>
        { favorite.map((value, index)=> {
          const key = value.email;
          const keyValue = contactsMap[key];
          const valueToDisplay = { 
            username: keyValue.username, 
            email: keyValue.email,
            profile_picture: keyValue.profile_picture, 
            last_seen: keyValue.last_seen 
          };
          return <FavoriteChat key={key} value={valueToDisplay} />
          }) }
       </div>
    </div>
  )
}

export default FavoriteChats;