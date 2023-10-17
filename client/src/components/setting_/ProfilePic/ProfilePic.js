import React, { useState } from "react";
import defaultPic from '../../../assets/profile.jpg';
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileStatus from "./ProfileDescription";
import SaveChanges from "./ProfileSaveChanges";

  

// Profile
function ProfilePic({ pic }) {
  const [edit, setEdit] = useState(false);
  const [editOp, setEditOption] = useState(null);
  const [currImg, setCurrImg] = useState(pic ? pic : defaultPic);
  const [imgFile, setImgFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [showSC, setShowSC] = useState(false);
  const [view, setView] = useState(false);
  const [take, setTake] = useState(false);
  const states = {
    edit: edit,
    editOp: editOp,
    currImg: currImg,
    imgFile: imgFile,
    imgURL: imgURL,
    showSC: showSC,
    view: view,
    take: take,
  };
  const setStates = {
    setEdit: setEdit,
    setEditOption: setEditOption,
    setCurrImg: setCurrImg,
    setImgFile: setImgFile,
    setImgURL: setImgURL,
    setShowSC: setShowSC,
    setView: setView,
    setTake: setTake
  };

  return (
    <div className="w-[222px] h-[222px] mx-auto relative">
      <ProfilePicture states={states} setStates={setStates}/>
      <ProfileName />
      <ProfileStatus />
      <SaveChanges states={states} setStates={setStates}/> 
    </div>
  );
}

export default ProfilePic;