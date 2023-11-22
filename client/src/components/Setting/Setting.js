import React from "react";
import { useSelector } from "react-redux";
import { Heading } from "../Common/Heading";
import PictureSection from "../Profile/PictureSection/PictureSection";
import Picture from "../Profile/PictureSection/Picture/Picture";
import EditPicture from "../Profile/PictureSection/Picture/EditPicture";
import Name from "../Profile/PictureSection/Name/Name";
import StatusList from "../Profile/PictureSection/Status/StatusList";
import InfoSection from "./InfoSection/InfoSection";
import ExpendableComponent from "./InfoSection/ExpendableComponent";
import Input from "../Profile/InfoSection/Input";
import Theme from "./InfoSection/Theme/Theme";




// Setting
function Setting() {
  const { profile_picture, username, mobile_number, email, password, status, location } = useSelector(state => state.UserSlice);
  return (
    <main className="w-full h-full flex flex-col absolute slide-right">
      <Heading text={'Settings'} />
      <PictureSection>
        <Picture picture={profile_picture}>
          <EditPicture />
        </Picture>
        <Name name={username} />
        <StatusList />
      </PictureSection>
      <InfoSection>
        <ExpendableComponent p="Personal Info">
          <Input field="Username" data={username} type="text" />
          <Input field="Mobile Number" data={mobile_number} type="text" />
          <Input field="Email" data={email} type="email" />
          <Input field="Password" data={password} type="password" />
          <Input field="Status" data={status} type="text" />
          <Input field="Location" data={location} type="text" />
        </ExpendableComponent>
        <ExpendableComponent p="Privacy">
        </ExpendableComponent>
        <ExpendableComponent p="System">
        </ExpendableComponent>
        <ExpendableComponent p="Theme">
          <Theme />
        </ExpendableComponent>
        <ExpendableComponent p="Langugae">
        </ExpendableComponent>
        <ExpendableComponent p="Security">
        </ExpendableComponent>
        <ExpendableComponent p="Help">
        </ExpendableComponent>
      </InfoSection>
    </main>
  );
}

export default React.memo(Setting);
