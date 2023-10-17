import { useState } from "react";

// Profile Name
function ProfileName({ name }){
    const [currName, setCurrName] = useState(name ? name : 'Your Name');
  
    return (
      <div className="w-full h-auto">
        <h1 className="w-full h-auto py-1 text-[16px] font-[600] text-center">{currName}</h1>
      </div>
    );
}

export default ProfileName;