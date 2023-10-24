import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatMode } from '../../context/NavigateModes';
import { sortArrayOfObjectsByName } from '../../services/sorting';
import { _chatRoomContact } from '../../context/Profile';
import defaultPicture from '../../assets/profile.jpg';
import ContactMenu from './ContactMenu';



// Contact
const Contact = React.memo(({ value, letter, index }) => {
  const dispatch = useDispatch();
  const email = value.email;
  const username = value.username;
  const picture = value.profile_picture ? value.profile_picture : defaultPicture;
  const letterToDisplay =  username.slice(0, 1).toUpperCase();

  // Click handler
  function handleClick(){
    dispatch(_chatRoomContact(email));
    dispatch(setChatMode(true));
  }

  return (
    <>
      { (letter || index === 0) && <h1 className='flex items-end text-[#7269ef] font-medium w-full h-[54px]'>{letterToDisplay}</h1> }
      <div onClick={handleClick} className='flex justify-between items-center my-2 px-2 py-2 rounded-md hover:bg-[#abb4d211] transition-all'>
        <div className='flex items-center gap-2'>
          <img src={picture} className='w-[40px] aspect-square rounded-full flex-shrink-0' />
          <p>{username}</p>
        </div>
        <ContactMenu />
      </div>
    </>
  );
})


function AllContactList(){
  const { contacts } = useSelector((state) => state.ProfileSlice);
  const { contactsMap, all } = contacts;
  const sortedAll = sortArrayOfObjectsByName(all);
  return (
    <div className='flex-grow overflow-scroll'>
      { sortedAll.map((value, index)=> {
          const key = value.email;
          const keyValue = contactsMap[key];
          const prevLetter = index-1>0 && sortedAll[index-1].username.slice(0, 1).toUpperCase();
          const currLetter = sortedAll[index].username.slice(0, 1).toUpperCase();
          let letterToSend = prevLetter !== currLetter
          if(currLetter === '0') letterToSend = false;
          const valueToDisplay = { 
            username: keyValue.username, 
            email: keyValue.email,
            profile_picture: keyValue.profile_picture, 
          };
          return <Contact key={key} value={valueToDisplay} letter={letterToSend} index={index} />
        })}
    </div>
  )
};

export default AllContactList;
