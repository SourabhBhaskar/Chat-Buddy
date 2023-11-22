import React, { } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../Common/Theme';
import { _chatRoomContact } from '../../../context/Profile';
import defaultPicture from '../../../assets/profile.jpg';
import ItemMenu from './ItemMenu';
import { setIsChatRoomOpen } from '../../../context/Boolean/booleanSlice';
// import { setChatRoomContact } from '../../../context/Contacts/ContactsSlice';



// Contact
const Item = React.memo(({ value }) => {
    const dispatch = useDispatch();
    const email = value.email;
    const username = value.username;
    const picture = value.profile_picture ? value.profile_picture : defaultPicture;
    const { commonBgHover, primaryTxt } = useTheme();
  
    // Click handler
    function handleClick(){
      // dispatch(setChatRoomContact(email));
      dispatch(setIsChatRoomOpen(true));
    }
  
    return (
      <div onClick={handleClick} className={`flex justify-between items-center rounded-md p-3 mx-4 ${commonBgHover}`}>
        <div className='flex items-center gap-2'>
          <img src={picture} className='w-[40px] aspect-square rounded-full flex-shrink-0' />
          <p className={`${primaryTxt}`}>{username}</p>
        </div>
        <ItemMenu />
      </div>
    );
  })


  export default Item;