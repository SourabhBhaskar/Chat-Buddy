import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setConnectionProfile } from "../../../../context/GlobalContext/global.slice";


// Connection Info
function ConnectionInfo(){
  const dispatch = useDispatch();
  const { username, profile_picture, last_seen } = useSelector(state => state.ConnectionsSlice).currentConnection;

  return (
    <div onClick={() => dispatch(setConnectionProfile(true))} className='cursor-pointer flex items-center gap-2'>
      <img src={profile_picture} className='w-[40px] h-[40px] rounded-full' />
      <div className="w-full max-w-[200px] truncate flex flex-col justify-center text-primary-light dark:text-primary-dark">
        <p className='w-full text-[1rem] font-medium truncate'>{username}</p>
        <small className="w-full truncate text-xs">{last_seen}</small>
      </div>
    </div>
  );
}


export default ConnectionInfo;