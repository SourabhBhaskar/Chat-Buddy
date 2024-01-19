import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setConnectionProfile } from "../../../../../context/GlobalContext/global.slice";
import defaultPic from "../../../../../assets/profile.jpg";


// Connection Info
function ConnectionInfo(){
  const dispatch = useDispatch();
  const { currentConnection, all } = useSelector(state => state.ConnectionsSlice)
  const { username, profile_picture, last_seen } = all[currentConnection] ? all[currentConnection].bio : {};

  return (
    <div onClick={() => dispatch(setConnectionProfile(true))} className='cursor-pointer flex items-center gap-2'>
      <div className={`w-[40px] h-[40px] rounded-full flex-shrink-0 overflow-hidden relative ${ !profile_picture && 'load-picture' }`}>
        <img src={profile_picture || defaultPic} alt="pic" className='w-full h-full rounded-full' />
      </div>
      <div className="w-full max-w-[200px] truncate flex flex-col justify-center text-primary-light dark:text-primary-dark">
        <p className='w-full text-[1.1rem] font-medium truncate'>{username}</p>
        <small className="w-full truncate text-xs">{last_seen}</small>
      </div>
    </div>
  );
}


export default ConnectionInfo;