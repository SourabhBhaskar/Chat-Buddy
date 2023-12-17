// Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsConnectionProfileOpen } from "../../../../context/Boolean/booleanSlice";
import { formSubmitter } from "../../../../utils/formSubmitter.util";
import { setUpdateConnection } from "../../../../context/Connections/Connections.slice";
import defaultPic from "../../../../assets/profile.jpg";
import Profile from "./Profile";
import Heading from "../Common/Headings";
import PictureSection from "./PictureSection/PictureSection";
import Picture from "./PictureSection/Picture/Picture";
import Name from "./PictureSection/Name/Name";
import Status from "./PictureSection/Status/Status";
import InfoSection from "./InfoSection/InfoSection";
import DataSection from "./InfoSection/DataSection";
import Input from "./InfoSection/Input";
import Notifications from "./InfoSection/Notifications";
import Share from "./InfoSection/Share";
import Remove from "./InfoSection/Remove";
import Block from "./InfoSection/Block";

const findUrl = (urlName) => {
  switch (urlName) {
    case "Notifications":
      return process.env.REACT_APP_SERVER_CONNECTIONS_UPDATE_NOTIFICTIONS;
    case "Block":
      return process.env.REACT_APP_SERVER_CONNECTIONS_UPDATE_BLOCK;
    case "Remove":
      return process.env.REACT_APP_SERVER_CONNECTIONS_REMOVE;
    default:
      return process.env.REACT_APP_SERVER;
  }
};


// Sender Profile
function ConnectionProfile() {
  const dispatch = useDispatch();
  const {
    username,
    mobile_number,
    email,
    status,
    location,
    profile_picture,
    last_seen,
    notifications,
    block
  } = useSelector((state) => state.ConnectionsSlice).currentConnection;

  async function handleSubmit({ name, value }) {
    const options = {
      url: findUrl(name),
      method: "PUT",
      credentials: true,
      data: { connectionId: email, data: { name, value }},
      headers: { "Content-Type": "application/json" }
    };

    const { result, error } = await formSubmitter({ ...options });

    if (!error) {
      const { data, message, error } = result;
      if (!error) {
        dispatch(setUpdateConnection(data));
        console.log(message);
      } else {
        console.log("Server Error:", error);
        alert(error);
      }
    } else {
      console.log("Client Error:", error);
      alert(`Unable to update ${name}`);
    }
  }

  return (
    <Profile padding={true}>
      <Heading
        headingText={`${username}'s Proflie`}
        headingType={"heading-with-front-btn"}
        btnIcon={"back"}
        handleBtnClick={() => dispatch(setIsConnectionProfileOpen(false))}
      />
      <PictureSection>
        <Picture picture={profile_picture || defaultPic} />
        <Name name={username} />
        <Status status={status} last_seen={last_seen} />
      </PictureSection>
      <InfoSection>
        <DataSection>
          <Notifications
            notifications={notifications}
            setNotifications={() =>
              handleSubmit({ name: "Notifications", value: notifications || false })
            }
          />
        </DataSection>
        <DataSection>
          <Input
            type="text"
            name="Username"
            value={username || "Username"}
            inputEditButton={false}></Input>
          <Input
            type="text"
            name="Mobile Number"
            value={mobile_number || "_"}
            inputEditButton={false}></Input>
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
          <Block 
            block={block}
            setBlock={() =>
              handleSubmit({ name: "Block", value: block || false })
             } />
        </DataSection>
      </InfoSection>
    </Profile>
  );
}

// Export
export default ConnectionProfile;
