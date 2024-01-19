// Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../../../../utils/icons.util";
import { setConnectionProfile } from "../../../../../context/GlobalContext/global.slice";
import Heading from "../../Headings";
import PictureSection from "../PictureSection";
import Picture from "../Picture";
import Name from "../Name";
import Status from "./Status";
import DataSection from "../DataSection";
import InputTextField from "../InputTextField";
import Notifications from "./Notifications";
import Remove from "./Remove";
import Block from "./Block";


// Sender Profile
function ConnectionProfile() {
  const dispatch = useDispatch();
  const { currentConnection, all } = useSelector(state => state.ConnectionsSlice);
  const { username, mobile_number, email, status, location, profile_picture, last_seen } = all[currentConnection].bio;
  const { isBlocked, isNotificationOn } = all[currentConnection].settings;


  return (
    <section className="w-full xl:w-[420px] h-full px-2 flex flex-col bg-secondary-light dark:bg-secondary-dark">
      <Heading headingText={"My Profile"} headingType={"heading-with-front-btn"} btnIcon={icons.back} handleBtnClick={() => dispatch(setConnectionProfile(false))} />
      <PictureSection>
        <Picture picture={profile_picture}/>
        <Name name={username} />
        <Status status={status} />
      </PictureSection>
      <div className="flex-grow relative">
        <div className="w-full h-full flex flex-col gap-2 pb-4 absolute z-0 overflow-y-scroll hide-scrollbar">
          <DataSection>
            <Notifications isNotificationOn={isNotificationOn} connectionEmail={email} />
          </DataSection>
          <DataSection>
            <InputTextField
              type="text"
              name="Username"
              value={username || "_"}
            ></InputTextField>
            <InputTextField
              type="text"
              name="Mobile Number"
              value={mobile_number || "_"}
            ></InputTextField>
            <InputTextField
              type="email"
              name="Email"
              value={email || "_"}
            ></InputTextField>
            <InputTextField
              type="text"
              name="Location"
              value={location || "_"} 
            ></InputTextField>
            <InputTextField
              type="text"
              name="Last Seen"
              value={last_seen || "_"} 
            ></InputTextField>
          </DataSection>
          <DataSection>
            <Block connectionEmail={email} isBlocked={isBlocked} />
          </DataSection>
          <DataSection>
            <Remove />
          </DataSection>
        </div>
      </div>
    </section>
  );
}

// Export
export default ConnectionProfile;
