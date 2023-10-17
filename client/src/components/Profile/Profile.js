import React, { useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultPic from '../../assets/profile.jpg';
import EditableField from '../Common_/EditableField';
import Profile_Pic_Name_status from '../Common_/Profile_Pic_Name_status';




// About
function Status(profile){
  const [status, setStatus] = useState('');
  return (
    <div className='border-[1px] border-gray-700 w-full h-[100px] text-[#abb4d2]  cursor-pointer bg-transparent'>
      <p>{status}</p>
    </div>
  );
}


// Profile Picture
function ProfilePicture() {
  const myProfile = useSelector((state) => state.MyProfileSlice);
  const [oldImg, setOldImg] = useState(null);
  const [newImg, setNewImage] = useState(myProfile.private.profile_picture);
  const [click, setClick] = useState(false);
  const inputRef = useRef(null);


  // On Change converting image into base64
  const handleFileChange = (event) => {
    console.log("img", inputRef.current.src)
    event.stopPropagation();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setNewImage(e.target.result);
      };
    }
  }

  const handleClick = (e) => {

    e.stopPropagation();
    inputRef.current.click();
  };

  const handleSave = (e) => {    
    e.stopPropagation();
    setOldImg(newImg);
    console.log(newImg)
    setClick(false);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setNewImage(oldImg);
    setClick(false)
  };

  return (
    <div onClick={()=>setClick(true)} className={`w-full h-auto flex flex-col items-center justify-between relative transition-all ${click ? 'h-[155px]' : 'h-[100px]'}`}>
      <div className={`flex-shrink-0 w-[100px] h-[100px] rounded-full cursor-pointer relative transition-all`} onClick={handleClick}>
        <img src={newImg} className='w-full h-full rounded-full' alt='Selected' />
      </div>
      <input className='hidden' type='file' ref={inputRef}  accept='image/*' onChange={handleFileChange} />
      <div className={`gap-2 transition-all ${click ? 'flex' : 'hidden'}`}>
        <button className='w-[70px] py-[1px]  bg-[#7269ef] rounded-md hover:bg-[#7269efcc]' onClick={handleSave}>Save</button>
        <button className='w-[70px] py-[1px] bg-[#7269ef] rounded-md hover:bg-[#7269efcc]' onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}




// Profile
function Profile() {
  const myProfile = useSelector((state) => state.MyProfileSlice);
  const username = myProfile.username || 'Unknown';
  const number = myProfile.mobile_number || '_';
  const email = myProfile.email || '_';
  const password = myProfile.password || '_';
  const location = myProfile.location || '_';
  const last_seen = myProfile.last_seen || '_';
  const dp = myProfile.profile_picture || defaultPic;
 
  return (
    <main className='w-full h-full absolute flex flex-col gap-4 p-6 pb-0 move text-gray-200'>
      <div className='w-full flex justify-between'>
        <h1 className='text-xl font-[600]'>My Profile</h1>
        <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
      </div>

      <Profile_Pic_Name_status pic={dp} name={username}>
          <div className='flex items-center justify-center gap-1'>
            <p className='w-[6px] h-[6px] bg-green-600 rounded-full'></p>
            <p className='text-[#abb4d2]'>{last_seen}</p>
          </div>
      </Profile_Pic_Name_status>

      <div className='flex-grow overflow-scroll'>
        <EditableField key={'username'} data={username} FieldName={'Username'} />
        <EditableField key={'number'} data={number} FieldName={'Mobile Number'} />
        <EditableField key={'email'} data={email} FieldName={'Email'} />
        <EditableField key={'password'} data={password} FieldName={'Password'} />
        <EditableField key={'location'} data={location} FieldName={'Location'} />
      </div>

    </main>
  )
}

export default Profile;