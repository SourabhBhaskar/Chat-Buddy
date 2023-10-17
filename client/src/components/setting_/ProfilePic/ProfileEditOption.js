import React, { } from "react";
import defaultPic from '../../../assets/profile.jpg';
import ProfileViewPhoto from "./ProfileViewPhoto";
import ProfileTakePhoto from "./ProfileTakePhoto";


// Edit Option
function ProfilePictureEditOption({ states, setStates }){
  const EditOptions = ['View photo', 'Take photo', 'Upload photo', 'Remove photo'];

  // Handle Edit Option
  function handleSetEditOption(op){
    setStates.setEditOption(op);
    setStates.setEdit(false);

    if(op === 'View photo'){
      setStates.setView(true);
    }else if(op === 'Take photo'){
      setStates.setTake(true);
    }
    else if(op === 'Upload photo'){
      const imgInp = document.getElementById('fileInput');
      imgInp.click();
    }else if(op === 'Remove photo'){
      setStates.setImgURL(defaultPic);
      setStates.setShowSC(true);
    }
  }

  return(
    <>
      { states.edit &&
        <div className="w-auto h-auto absolute top-[110%] left-[-27px] bg-[#36404a] rounded-md shadow-md overflow-hidden border-[1px] border-gray-600 py-2 dropdown-menu">
          {EditOptions.map((value)=><p onClick={() => handleSetEditOption(value)} className="w-[150px] py-2 text-center hover:bg-[#a6b0cf11] transition-all cursor-pointer" key={value}>{value}</p>)}
        </div>
      }
      <ProfileViewPhoto states={states} setStates={setStates} /> 
      <ProfileTakePhoto states={states} setStates={setStates} /> 
    </>
  )
}


export default ProfilePictureEditOption;