import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '../../../Common/Theme';
import ViewPicture from './ViewPicture';
import UploadedPictureButton from './UploadedPictureButton';
import TakePicture from './TakePicture';
import defaultPic from "../../../../assets/profile.jpg";
import { updateUser } from '../../../../context/User/userExtraReducers';


function EditPicture() {
    const EditOption = [
      "View photo",
      "Take photo",
      "Upload photo",
      "Remove photo",
  ];
  const { border, primaryBg, primaryTxt, secondaryTxt, primaryBgWithHover, commonBgHover, secondaryTxtWithHover} = useTheme();
  const dispatch = useDispatch();
  const { profile_picture } = useSelector((state) => state.UserSlice);
  const [currPicture, setCurrPicture] = useState(profile_picture);
  const [isEditing, setIsEditing] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [take, setTake] = useState(false);
  
  // Handle Editing
  const handleIsEditing = (e) => {
    e.stopPropagation();
    setIsEditing(!isEditing);
  }

  // Handle View Picture Exit
  const handleViewPictureExit = () => {
    setView1(false);
    setView2(false);
  }

  // Handle Take Picture Exit
  const handleTakePictureExit = () => setTake(!take);


  // Handle Save Picture 
  const handleSavePicture = (picture) => {
    setCurrPicture(picture);
    dispatch(updateUser({name: 'Profile Picture', value: picture}));
  }

  // Handle Upload Picture
  const handleUploadPicture = () => dispatch(updateUser(currPicture));

  // Handle Picture Change 
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Image = e.target.result;
            setCurrPicture(base64Image);
            setView2(true)
        };
        reader.readAsDataURL(file);
    }
};

  // Handle Editing Choice
    const handleEditedingChoice = (option) => {
      setIsEditing(false);
      switch (option) {
          case "View photo":
              setView1(true);
              break;
          case "Take photo":
              setTake(true);
              break;
          case "Upload photo":
              const imgInp = document.getElementById("imgInput");
              imgInp.click();
              break;
          case "Remove photo":
              handleSavePicture(defaultPic);
              break;
      }
    };

  return (
    <>
      <input onChange={handlePictureChange} id="imgInput" type="file" accept="image/*" style={{ display: "none" }}/>
      <div className={`absolute right-0 bottom-0 rounded-full transition-all z-20 flex justify-center items-center ${primaryBgWithHover}`}>
        <button onClick={handleIsEditing} className={`text-[15px] p-2 transition-all duration-300 rounded-full ${primaryTxt}`}> 
            <Icon icon="clarity:edit-solid" />
        </button>
        {isEditing && 
          <div className={`w-auto absolute left-[-90px] top-[50px] rounded-md overflow-scroll shadow-lg border-[1px] p-4 hide-scrollbar ${border} ${primaryBg}`}>
            {EditOption.map((value) => (<p onClick={() => handleEditedingChoice(value)} className={`w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden ${commonBgHover} ${secondaryTxt} ${secondaryTxtWithHover}`} key={value}>{value}</p> ))}
          </div>}
      </div>

      { view1 && 
      <ViewPicture picture={currPicture} exit={handleViewPictureExit}/>}
      { view2 && 
      <ViewPicture picture={currPicture} exit={handleViewPictureExit}>
        <UploadedPictureButton save={handleUploadPicture} exit={handleViewPictureExit}/>
      </ViewPicture>}
      { take && 
      <TakePicture savePicture={handleSavePicture} exit={handleTakePictureExit}/>}
    </>
  )
}

export default EditPicture