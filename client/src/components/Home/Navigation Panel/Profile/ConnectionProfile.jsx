import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { BtnHeading } from '../Common/Heading';
import PictureSection from './PictureSection/PictureSection';
import InfoSection from './InfoSection/InfoSection';
import Picture from './PictureSection/Picture/Picture';
import Name from './PictureSection/Name/Name';
import Status from './PictureSection/Status/Status';
import Notification from './InfoSection/Notification';
import DataSection from './InfoSection/DataSection';
import Remove from './InfoSection/Remove';
import Block from './InfoSection/Block';
import Share from './InfoSection/Share';
import Input from './InfoSection/Input';
import { setIsReceiverProfileOpen } from '../../context/Boolean/booleanSlice';
import defaultPic from '../../assets/profile.jpg';



function ConnectionProfile() {
  const dispatch = useDispatch();
  const { 
    profile_picture, 
    username, status, 
    last_seen, 
    mobile_number, 
    location, email
  } = useSelector(state => state.ConnectionsSlice);

  const handleExit = () => dispatch(setIsReceiverProfileOpen(false));

  return (
    <>
      <BtnHeading text={'Profile'} exit={handleExit} />
      <PictureSection>
        <Picture picture={profile_picture ? profile_picture : defaultPic }/>
        <Name name={username} />
        <Status status={status} last_seen={last_seen} />
      </PictureSection>
      <InfoSection>
        <Notification />
        <DataSection>
          <Input field="Username" data={username} type="text" isDisabled={false} />
          <Input field="Mobile Number" data={mobile_number} type="text" isDisabled={true} />
          <Input field="Email" data={email} type="email" isDisabled={true} />
          <Input field="Status" data={status} type="text" isDisabled={true} />
          <Input field="Location" data={location} type="text" isDisabled={true} />
        </DataSection>
        <DataSection>
          <Share />
          <Remove />
          <Block />
        </DataSection>
      </InfoSection>
    </>
  )
}

export default ConnectionProfile;