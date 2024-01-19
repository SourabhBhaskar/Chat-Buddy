import React from 'react';
import { useSelector } from 'react-redux';
import defaultPic from '../../../../assets/profile.jpg';
import Headings from '../Headings';
import PictureSection from '../Profile/PictureSection';
import Picture from '../Profile/Picture';
import EditPicture from '../Profile/UserProfile/EditPicture';
import Name from '../Profile/Name';
import StatusList from '../Profile/UserProfile/StatusList';
import Account from './Account';
import Privacy from './Privacy';
import ThemAndLanguage from './ThemAndLanguage';
import Help from './Help';


function Settings() {
  const { username, profile_picture, status} = useSelector(state => state.UserSlice);
  const handleSubmit = () => {

  }

  return (
    <div className='w-full h-full flex flex-col'>
      <Headings headingText={"Settings"} headingType={"simple-heading"} />
      <PictureSection>
        <Picture picture={profile_picture || defaultPic}>
          <EditPicture handleSubmit={handleSubmit}/>
        </Picture>
        <Name name={username} />
        <StatusList status={status} handleSubmit={handleSubmit} />
      </PictureSection>
      <section className='flex-grow relative overflow-x-hidden overflow-y-scroll hide-scrollbar'>
        <div className='w-full h-full absolute'>
          <Account />
          <Privacy />
          <ThemAndLanguage />
          <Help />
        </div>
      </section>
    </div>
  )
}


export default Settings;