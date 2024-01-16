// Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSubmitter } from "../../../../utils/formSubmitter.util";
import { setUpdateConnection } from "../../../../context/ConnectionsContext/connections.slice";
import defaultPic from "../../../../assets/profile.jpg";
import Heading from "../Headings";
import PictureSection from "./PictureSection";
import Picture from "./Picture";
import Name from "./Name";
import Status from "./Status";
import InfoSection from "./InfoSection";
import DataSection from "./DataSection";
import InputTextField from "./InputTextField";
import Notifications from "./Notifications";
import Share from "./Share";
import Remove from "./Remove";
import Block from "./Block";

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
    <section>
      <Heading
        headingText={`${username}'s Proflie`}
        headingType={"heading-with-front-btn"}
        btnIcon={"back"}
        // handleBtnClick={() => dispatch(setIsConnectionProfileOpen(false))}
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
          <InputTextField
            type="text"
            name="Username"
            value={username || "Username"}
            inputEditButton={false}></InputTextField>
          <InputTextField
            type="text"
            name="Mobile Number"
            value={mobile_number || "_"}
            inputEditButton={false}></InputTextField>
          <InputTextField
            type="email"
            name="Email"
            value={email || "_"}
            inputEditButton={false}></InputTextField>
          <InputTextField
            type="text"
            name="Location"
            value={location || "_"}
            inputEditButton={false}></InputTextField>
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
    </section>
  );
}

// Export
export default ConnectionProfile;
