import React, { useState } from "react";
import { Icon } from "@iconify/react";
import defaultPic from '../../assets/profile.jpg';


// Save Changes
function SaveChanges({ states, setStates }){
    // Handle Save
    function handleSaveChanges(haveToSave){
      setStates.setShowSC(false);
      if(haveToSave){
        setStates.setCurrImg(states.imgURL);
      }else{
        setStates.setCurrImg(states.currImg);
        setStates.setImgURL(null);
      }
    }
  
    return (
      <div className="w-[150px] flex justify-between text-sm mx-auto py-2">
        <button onClick={()=>handleSaveChanges(true)} className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Save</button>
        <button onClick={()=>handleSaveChanges(false)} className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Cancel</button>
      </div>
    )
}
  
  
// Profile Picture
function ProfilePicture({ states, setStates }){
  const [edit, setEdit] = useState(false);
  const EditOption = ['View photo', 'Take photo', 'Upload photo', 'Remove photo'];
  const currPic = states.imgURL ? states.imgURL : states.currImg;

  // Handle Edit
  function handleEdit(){
    setEdit(!edit);
  }

  // Handle Edit Option
  function handleSetEditOption(op){
    setStates.setEditOption(op);
    setEdit(false);

    if(op === 'Upload photo'){
      const imgInp = document.getElementById('fileInput');
      imgInp.click();
    }else if(op === 'Remove photo'){
      setStates.setImgURL(defaultPic);
      setStates.setShowSC(true);
    }
  }
  
  // Handle Image Change
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
    <div className="w-[96px] h-[96px] relative border-[1px] border-gray-700 mx-auto p-1 my-2 rounded-full">
      <img src={currPic} alt={"picture"} className="w-full h-full rounded-full"/>
      <input onChange={handleImgChange} id="fileInput" type="file" accept="image/*" style={{ display: "none" }}/>
      <div className="bg-[#36404a] absolute bottom-0 right-0 rounded-full">
        <button onClick={handleEdit} className="text-[15px] p-2 transition-all duration-300 hover:bg-[#2c3238] hover:text-[#ffffff] rounded-full">
          <Icon icon="clarity:edit-solid" />
        </button>
      </div>
      {edit && <div className="w-auto h-auto absolute top-[110%] left-[-27px] bg-[#36404a] rounded-md shadow-md overflow-hidden border-[1px] border-gray-600 py-2 dropdown-menu">
        {EditOption.map((value)=><p onClick={() => handleSetEditOption(value)} className="w-[150px] py-2 text-center hover:bg-[#a6b0cf11] transition-all cursor-pointer" key={value}>{value}</p>)}
      </div>}
    </div>
  );
}

// Profile Name
function ProfileName({ name }){
  const [currName, setCurrName] = useState(name ? name : 'Your Name');

  return (
    <div className="w-full h-auto">
      <h1 className="w-full h-auto py-1 text-[16px] font-[600] text-center">{currName}</h1>
    </div>
  );
}

// Profile Description
function ProfileDescription(){
  return (
    <div className="">
      <p className="text-center">Available</p>
    </div>
  );
}


// Profile
function Profile({ pic }) {
  const [editOp, setEditOption] = useState(null);
  const [currImg, setCurrImg] = useState(pic ? pic : defaultPic);
  const [imgFile, setImgFile] = useState(null);
  const [imgURL, setImgURL] = useState(null);
  const [showSC, setShowSC] = useState(false);
  const states = {
    editOp: editOp,
    currImg: currImg,
    imgFile: imgFile,
    imgURL: imgURL,
    showSC: showSC
  };
  const setStates = {
    setEditOption: setEditOption,
    setCurrImg: setCurrImg,
    setImgFile: setImgFile,
    setImgURL: setImgURL,
    setShowSC: setShowSC
  };

  return (
    <div className="w-[222px] h-[222px] mx-auto relative">
      <ProfilePicture states={states} setStates={setStates}/>
      <ProfileName />
      <ProfileDescription />
      { showSC && <SaveChanges states={states} setStates={setStates}/> }
    </div>
  );
}

export default Profile;