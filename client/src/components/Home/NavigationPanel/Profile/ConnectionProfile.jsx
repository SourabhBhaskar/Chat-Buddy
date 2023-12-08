// Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultPic from "../../../../assets/profile.jpg";
import { BtnHeading } from "../Common/Headings";
import PictureSection from "./PictureSection/PictureSection";
import DataSection from "./InfoSection/DataSection";
import InfoSection from "./InfoSection/InfoSection";
import Picture from "./PictureSection/Picture/Picture";
import Name from "./PictureSection/Name/Name";
import Status from "./PictureSection/Status/Status";
import Notification from "./InfoSection/Notification";
import Input from "./InfoSection/Input";
import Share from "./InfoSection/Share";
import Remove from "./InfoSection/Remove";
import Block from "./InfoSection/Block";
import { updateUser } from "../../../../context/User/userExtraReducers";
import { setIsConnectionProfileOpen } from "../../../../context/Boolean/booleanSlice";


// Sender Profile
function UserProfile() {
  const dispatch = useDispatch();
  const {
    username,
    mobile_number,
    email,
    status,
    location,
    profile_picture,
    last_seen
  } = useSelector((state) => state.ConnectionsSlice).currentConnection;
  const [activeInputField, setActiveInputField] = useState("");

  // Handle Submit
  const handleSubmit = (value) => {
    dispatch(updateUser(value));
  }

  return (
    <div className='w-full h-full bg-l-secondary-bg-color dark:bg-d-secondary-bg-color'>
      <div className="w-full h-full flex flex-col relative">
        <BtnHeading exit={() => dispatch(setIsConnectionProfileOpen(false))} text={`${username}'s Profile`} />
        <PictureSection>
          <Picture picture={profile_picture || defaultPic} />
          <Name name={username} />
          <Status status={status} last_seen={last_seen} />
        </PictureSection>
        <InfoSection>
          <DataSection>
            <Notification />
          </DataSection>
          <DataSection>
            <Input
              type="text"
              name="Username"
              value={username || "Username"}
              inputEditButton={false}
            ></Input>
            <Input
              type="text"
              name="Mobile Number"
              value={mobile_number || "_"}
              inputEditButton={false}
            ></Input>
            <Input
              type="email"
              name="Email"
              value={email || "_"}
              inputEditButton={false}></Input>
            <Input
              type="text"
              name="Location"
              value={location || "_"}
              inputEditButton={false}></Input>
          </DataSection>
          <DataSection>
            <Share />
            <Remove />
            <Block />
          </DataSection>
        </InfoSection> 
      </div>
    </div>
  );
}


// Export
export default UserProfile;
