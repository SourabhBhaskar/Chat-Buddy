// Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultPic from "../../../../assets/profile.jpg";
import { Heading } from "../Common/Headings";
import PictureSection from "./PictureSection/PictureSection";
import DataSection from "./InfoSection/DataSection";
import InfoSection from "./InfoSection/InfoSection";
import Picture from "./PictureSection/Picture/Picture";
import EditPicture from "./PictureSection/Picture/EditPicture";
import Name from "./PictureSection/Name/Name";
import StatusList from "./PictureSection/Status/StatusList";
import Input from "./InfoSection/Input";
import Logout from "./InfoSection/Logout";
import { updateUser } from "../../../../context/User/userExtraReducers";


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
  } = useSelector((state) => state.UserSlice);
  const [activeInputField, setActiveInputField] = useState("");

  // Handle Submit
  const handleSubmit = (value) => {
    dispatch(updateUser(value));
  }

  return (
    <div className="w-full h-full flex flex-col relative">
      <Heading text={"My Profile"} />
      <PictureSection>
        <Picture picture={profile_picture || defaultPic}>
          <EditPicture />
        </Picture>
        <Name name={username} />
        <StatusList value={status || "Status"} handleSubmit={handleSubmit} />
      </PictureSection>
      <InfoSection>
        <DataSection>
          <Input
            type="text"
            name="Username"
            value={username || "Username"}
            handleSubmit={handleSubmit}
            isDisabled={activeInputField === "Username"}
            setActiveInputField={setActiveInputField}></Input>
          <Input
            type="text"
            name="Mobile Number"
            value={mobile_number || "_"}
            handleSubmit={handleSubmit}
            isDisabled={activeInputField === "Mobile Number"}
            setActiveInputField={setActiveInputField}></Input>
          <Input
            type="email"
            name="Email"
            value={email || "_"}
            handleSubmit={handleSubmit}
            inputEditButton={false}
            setActiveInputField={setActiveInputField}></Input>
          <Input
            type="text"
            name="Location"
            value={location || "_"}
            handleSubmit={handleSubmit}
            isDisabled={activeInputField === "Location"}
            setActiveInputField={setActiveInputField}></Input>
        </DataSection>
        <DataSection>
          <Logout />
        </DataSection>
      </InfoSection> 
    </div>
  );
}


// Export
export default UserProfile;
