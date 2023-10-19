import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Privacy from "./Privacy/Privacy";
import Security from "./Security_/Security";
import Theme from "./Theme_/Theme";
import Language from "./Language_/Language";
import Help from "./Help/Help";


// Setting
function Setting() {
  return (
    <main className="w-full h-full absolute flex flex-col p-6 pb-0 move">
      <h1 className="text-xl font-[600]">Settings</h1>
      <section className="w-full h-[222px] flex-shrink-0 my-6 border-b-[1px] border-gray-600">
        <ProfilePic></ProfilePic>
      </section>
      <section className="flex-grow overflow-scroll hide-scrollbar">
        <PersonalInfo />
        <Theme />
        <Language />
        <Privacy />
        <Security />
        <Help />
      </section>
    </main>
  );
}

export default Setting;
