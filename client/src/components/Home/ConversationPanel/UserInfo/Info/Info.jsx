// Imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsConnectionProfileOpen } from "../../../../../context/Boolean/booleanSlice";
import defaultPic from '../../../../../assets/profile.jpg';


// Info
function Info(){
  const dispatch = useDispatch();
  const { 
    username,
    profile_picture,
    last_seen
  } = useSelector(state => state.ConnectionsSlice).currentConnection;

  const handleConnectionProfile = () => dispatch(setIsConnectionProfileOpen(true));

  return (
    <div onClick={handleConnectionProfile} className='cursor-pointer flex items-center gap-2'>
      <img src={profile_picture || defaultPic} className='w-[40px] h-[40px] rounded-full' />
      <div className="w-full max-w-[200px] truncate flex flex-col justify-center">
        <p className='w-full text-[1rem] font-medium truncate'>{username}</p>
        <small className="w-full truncate">{last_seen}</small>
      </div>
    </div>
  );
}


// Info
export default React.memo(Info);