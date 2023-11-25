// Imports
import React from "react";


// Info
function Info({ username, profile_picture, last_seen, handleConnectionProfile }){
  return (
    <div onClick={handleConnectionProfile} className='cursor-pointer flex items-center gap-2'>
      <img src={profile_picture} className='w-[40px] h-[40px] rounded-full' />
      <div className="w-full max-w-[200px] truncate flex flex-col justify-center">
        <p className='w-full text-[1rem] font-medium truncate'>{username}</p>
        <small className="w-full truncate">{last_seen}</small>
      </div>
    </div>
  );
}


// Info
export default React.memo(Info);