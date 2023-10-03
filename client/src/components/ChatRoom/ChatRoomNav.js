import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatMode } from "../../context/ChatMode";
import profile from '../../assets/profile.jpg';


// Back Button
function Back(){
  const dispatch = useDispatch();
  function handleClick(){
    dispatch(toggleChatMode(false));
  }
  return (
    <button className="inline-block text-xs text-gray-300 hover:text-white" onClick={handleClick}>
      <i className="fa-solid fa-chevron-left" ></i>
    </button>
  )
}


// Menu Button
function Menu(){
  return (
    <div className="w-auto h-full">
      <i className="fa-solid fa-ellipsis-vertical text-gray-300 active:text-white text-xs"></i>
    </div>
  );
}


// Profile
function Profile() {
  const ChatRoomContact = useSelector((state) => state.ContactStatesSlice).chatRoomContact;
  const picture = ChatRoomContact.profile_picture;
  const username = ChatRoomContact.username;
  const lastSeen = ChatRoomContact.last_seen;

  return (
    <div className="flex items-center gap-2">
      <img src={picture ? picture : profile} className='w-[50px] h-[50px] rounded-full bg-red-600' />
      <div>
        <p className='text-white text-[1rem] font-medium'>{username}</p>
        <small>{lastSeen}</small>
      </div>
    </div>
  )
}


// Nav
const ChatRoomNav = () => {
  return (
    <section className={`w-full h-[70px] flex-shrink-0 flex justify-center items-center text-white px-4 border-b-[1px] border-gray-700`} >
      <div className="w-full flex justify-between items-center">
        <div className='h-full w-full flex items-center gap-4'>
          <Back />
          <Profile/>
        </div>
        <Menu />
      </div>
    </section>
  );
}


export default ChatRoomNav;
