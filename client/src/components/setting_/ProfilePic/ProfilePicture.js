import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ProfilePictureEditOption from "./ProfileEditOption";




// Profile Picture Edit Button
function ProfilePictureEditButton({ states, setStates }){
  function handleEdit(){
    setStates.setEdit(!states.edit);
  }
  return (
    <div className="bg-[#36404a] absolute bottom-0 right-0 rounded-full">
      <button onClick={handleEdit} className="text-[15px] p-2 transition-all duration-300 hover:bg-[#2c3238] hover:text-[#ffffff] rounded-full">
        <Icon icon="clarity:edit-solid" />
      </button>
    </div>
  );
}


// Profile Picture Input
function ProfilePictureInput({ states, setStates }){
  function handleImgChange(e){
    const file = e.target.files[0];
    if(file){
      const fileURL = URL.createObjectURL(file);
      setStates.setImgFile(file);
      setStates.setImgURL(fileURL);
      setStates.setShowSC(true);
    }
  }
  return (
    <input onChange={handleImgChange} id="fileInput" type="file" accept="image/*" style={{ display: "none" }}/>
  );
}


// Profile Picutre Image
function ProfilePictureImage({ states, setStates }){
  const currPic = states.imgURL ? states.imgURL : states.currImg;
  return (
    <img src={currPic} alt={"picture"} className="w-full h-full rounded-full"/>
  );
}


// Profile Picture
function ProfilePicture({ states, setStates }){
    return (
      <>
        <div className="w-[96px] h-[96px] relative border-[1px] border-gray-700 mx-auto p-1 my-2 rounded-full">
          <ProfilePictureImage  states={states} setStates={setStates} />
          <ProfilePictureInput states={states} setStates={setStates} />
          <ProfilePictureEditButton states={states} setStates={setStates} />
          <ProfilePictureEditOption states={states} setStates={setStates} />
        </div>
      </>
    );
}

export default ProfilePicture;