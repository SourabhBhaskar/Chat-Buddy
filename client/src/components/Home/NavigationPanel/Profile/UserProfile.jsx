// Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSubmitter } from "../../../../utils/formSubmitter.util";
import defaultPic from "../../../../assets/profile.jpg";
import Profile from "./Profile";
import Heading from "../Common/Headings";
import PictureSection from "./PictureSection/PictureSection";
import Picture from "./PictureSection/Picture/Picture";
import EditPicture from "./PictureSection/Picture/EditPicture";
import Name from "./PictureSection/Name/Name";
import StatusList from "./PictureSection/Status/StatusList";
import InfoSection from "./InfoSection/InfoSection";
import DataSection from "./InfoSection/DataSection";
import Input from "./InfoSection/Input";
import Logout from "./InfoSection/Logout";
import { setUpdateUser } from "../../../../context/User/userSlice";
import { setIsPictureUploading } from "../../../../context/Boolean/booleanSlice";


const findUrl = (urlName) => {
  switch(urlName){
      case 'Username':
          return process.env.REACT_APP_SERVER_UPDATE_USERNAME;
      case 'Mobile Number':
          return process.env.REACT_APP_SERVER_UPDATE_MOBILE_NUMBER;
      case 'Email':
          return process.env.REACT_APP_SERVER_UPDATE_EMAIL;
      case 'Password':
          return process.env.REACT_APP_SERVER_UPDATE_PASSWORD;
      case 'Status':
          return process.env.REACT_APP_SERVER_UPDATE_STATUS;
      case 'Location':
          return process.env.REACT_APP_SERVER_UPDATE_LOCATION;
      case 'Profile Picture':
          return process.env.REACT_APP_SERVER_UPDATE_PICTURE;
      default: 
          return process.env.REACT_APP_SERVER;
  }
}

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
  const handleSubmit = async({ name, value }) => {
    const options = {
      url: findUrl(name),
      method: "PUT",
      credentials: true,
    }

    if(name === 'Profile Picture'){
        options['file'] = { name: 'picture', value };
        options['loaderCallback'] = (v) => dispatch(setIsPictureUploading(v));
    }else{
        options['data'] = { name, value };
        options['headers'] = { "Content-Type": "application/json" };
    }

    const { result, error } = await formSubmitter({ ...options });
    
    if (!error) {
      const { data, message, error } = result;
      if (!error) {
        dispatch(setUpdateUser(data));
        console.log(message);
      } else {
        console.log("Server Error:", error);
        alert(error)
      }
    } else {
      console.log("Client Error:", error);
      alert(`Unable to update ${name}`);
    }
  }


  return (
    <Profile>
      <Heading headingText={"My Profile"} headingType={"simple-heading"} />
      <PictureSection>
        <Picture picture={profile_picture || defaultPic}>
          <EditPicture handleSubmit={handleSubmit}/>
        </Picture>
        <Name name={username} />
        <StatusList status={status} handleSubmit={handleSubmit} />
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
    </Profile>
  );
}


// Export
export default React.memo(UserProfile);
