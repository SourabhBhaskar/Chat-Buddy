import React, { useContext, useState } from 'react'
import profile from '../../assets/profile.jpg';
import Profile_Pic_Name_status from '../common_/Profile_Pic_Name_status';
import DropdownMenu from '../common_/DropDownMenu';
import EditableField from '../common_/EditableField';
import { useSelector } from 'react-redux';









// Expendable Div
function ExpendableDiv({p, children}){
  const [expend, setExpend] = useState(false);

  return (
    <div className='w-full h-auto mb-2'>
      <div onClick={()=>setExpend(!expend)}  className='w-full h-[40px] flex justify-between items-center px-4 bg-[#abb4d211] border-[1px] border-gray-700 rounded-sm'>
        <p className='text-[0.95rem] font-medium'>{p}</p>
        <span className={`material-symbols-outlined text-[20px] pt-[1px] transition-all ${expend ? 'rotate-180' : 'rotate-0'}`}>expand_more</span>
      </div>
      { expend &&
        <div className={`h-auto border-[1px] border-t-[0px] border-gray-700 transition-all`}>
          {children}
        </div>
      }
    </div>
  );
}


// Personal info
function PersonalInfo(){
  const myProfile = useSelector((state) => state.MyProfileSlice);
  const username = myProfile.username || 'Unknown';
  const number = myProfile.mobile_number || '_';
  const email = myProfile.email || '_';
  const password = myProfile.password || '_';
  const location = myProfile.location || '_';

  return (
    <ExpendableDiv p={"Personal info"}>
        <div className='w-full h-full px-4 py-4'>
          <EditableField key={'username'} data={username} FieldName={'Username'} />
          <EditableField key={'number'} data={number} FieldName={'Mobile Number'} />
          <EditableField key={'email'} data={email} FieldName={'Email'} />
          <EditableField key={'password'} data={password} FieldName={'Password'} />
          <EditableField key={'location'} data={location} FieldName={'Location'} />
        </div>
    </ExpendableDiv>
  );
}


// Privacy 
function Privacy(){
  return (
    <ExpendableDiv p={"Privacy"}></ExpendableDiv>
  );
}


// Security
function Security(){
  return (
    <ExpendableDiv p={"Security"}></ExpendableDiv>
  );
}


// Help
function Help(){
  return (
    <ExpendableDiv p={"Help"}></ExpendableDiv>
  );
}


// Setting
function Setting() {
const myProfile = useSelector((state) => state.MyProfileSlice);
  const [expend, setExpend] = useState(false);
  const username = 'unknown';
  const dp = myProfile.profile_picture || profile;
  const ContentList = ['Available', 'Busy', 'Working', 'Sleeping', 'On a mission'];

  return (
    <main className='w-full h-full relative flex flex-col p-6 pb-0 move'>
      <h1 className='text-xl font-[600]'>Settings</h1>
      <Profile_Pic_Name_status pic={dp} name={username}>
        <DropdownMenu ContentList={ContentList}/>
      </Profile_Pic_Name_status>
      <section className='w-full h-full xl:flex-grow py-6 border-t-[1px] border-gray-700 overflow-scroll hide-scrollbar'>
          <PersonalInfo />
          <Privacy />
          <Security />
          <Help />
      </section>
    </main>
  )
}

export default Setting