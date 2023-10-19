import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChatMode } from "../../context/NavigateModes";
import defaultProfile from '../../assets/profile.jpg';


// Back Button
function Back(){
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(setChatMode(false));
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
const Profile = React.memo(({ profile }) => {
  const picture = profile.profile_picture;
  const username = profile.username;
  const lastSeen = profile.last_seen ? profile.last_seen.date : undefined ;

  return (
    <div className="flex items-center gap-2">
      <img src={picture ? picture : defaultProfile} className='w-[40px] h-[40px] rounded-full bg-red-600' />
      <div>
        <p className='text-white text-[1rem] font-medium'>{username}</p>
        <small>{lastSeen}</small>
      </div>
    </div>
  )
});


// Nav
function ChatRoomNav(){
  const { chatRoomContact } = useSelector((state) => state.ProfileSlice);

  return (
    <section className={`w-full h-[70px] flex-shrink-0 flex justify-center items-center text-white px-4 border-b-[1px] border-gray-700`} >
      <div className="w-full flex justify-between items-center">
        <div className='h-full w-full flex items-center gap-4'>
          <Back />
          <Profile profile={ chatRoomContact }/>
        </div>
        <Menu />
      </div>
    </section>
  );
}


export default ChatRoomNav;
