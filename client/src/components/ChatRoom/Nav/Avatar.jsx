import React from "react";
import { useDispatch  } from "react-redux";
import defaultPic from "../../../assets/profile.jpg";
import { setIsReceiverProfileOpen } from "../../../context/Boolean/booleanSlice";



// Avatar
function Avatar({ username, profile_picture, last_seen }){
  const dispatch = useDispatch();
  const handleShowProfile = () => dispatch(setIsReceiverProfileOpen(true));
  return (
    <div onClick={handleShowProfile} className='cursor-pointer flex items-center gap-2 text-l-primary-txt-color dark:text-d-primary-txt-color '>
      <img src={profile_picture ? profile_picture : defaultPic } className='w-[40px] h-[40px] rounded-full' />
      <div className="flex flex-col justify-center">
        <p className='text-[1rem] font-medium'>{username}</p>
        <small>{last_seen}</small>
      </div>
    </div>
  );
}


export default React.memo(Avatar);