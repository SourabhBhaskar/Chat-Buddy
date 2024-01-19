// Imports
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Headings from "../../Headings";
import PictureSection from "../PictureSection";
import Picture from "../Picture";
import EditPicture from "./EditPicture";
import Name from "../Name";
import StatusList from "./StatusList";
import DataSection from "../DataSection";
import InputTextField from "../InputTextField";
import Logout from "./Logout";
import { icons } from "../../../../../utils/icons.util";



// User Profile
function UserProfile() {
  const { username, mobile_number, email, status, location, profile_picture } = useSelector((state) => state.UserSlice);

  return (
    <div className='w-full h-full flex flex-col'>
      <Headings headingText={"My Profile"} headingType={"simple-heading"} btnIcon={icons.back} />
      <PictureSection>
        <Picture picture={profile_picture}>
          <EditPicture />
        </Picture>
        <Name name={username} />
        <StatusList status={status} handleSubmit={() => {}} />
      </PictureSection>
      <div className="flex-grow relative">
        <div className="w-full h-full flex flex-col gap-2 pb-4 absolute overflow-y-scroll hide-scrollbar">
          <DataSection>
            <InputTextField
              type="text"
              name="Username"
              value={username || "_"}
              isDisabled={false}
            ></InputTextField>
            <InputTextField
              type="text"
              name="Mobile Number"
              value={mobile_number || "_"}
              isDisabled={false}
            ></InputTextField>
            <InputTextField
              type="email"
              name="Email"
              value={email || "_"}
              isDisabled={true}
            ></InputTextField>
            <InputTextField
              type="text"
              name="Location"
              value={location || "_"} 
              isDisabled={false}
            ></InputTextField>
          </DataSection>
          <DataSection>
            <Logout />
          </DataSection> 
        </div>
      </div>
    </div>
  );
}


// Export
export default React.memo(UserProfile);
