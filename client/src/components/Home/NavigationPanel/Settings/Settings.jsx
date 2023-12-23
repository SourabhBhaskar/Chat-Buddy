import React from 'react';
import { useSelector } from 'react-redux';
import defaultPic from '../../../../assets/profile.jpg';
import Headings from '../Common/Headings';
import PictureSection from '../Profile/PictureSection/PictureSection';
import Picture from '../Profile/PictureSection/Picture/Picture';
import EditPicture from '../Profile/PictureSection/Picture/EditPicture';
import Name from '../Profile/PictureSection/Name/Name';
import StatusList from '../Profile/PictureSection/Status/StatusList';
import InfoSection from './InfoSection/InfoSection';
import Account from './InfoSection/Account/Account';
import Privacy from './InfoSection/Privacy/Privacy';
import ThemAndLanguage from './InfoSection/Theme&Language/ThemAndLanguage';
import Help from './InfoSection/Help/Help';


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
      <InfoSection>
        <Account />
        <Privacy />
        <ThemAndLanguage />
        <Help />
      </InfoSection>
    </div>
  )
}


export default Settings;