import React from "react";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import Privacy from "./Privacy";
import Security from "./Security";
import Theme from "./Theme";
import Help from "./Help";


// Setting
function Setting() {
  return (
    <main className="w-full h-full absolute flex flex-col p-6 pb-0 move">
      <h1 className="text-xl font-[600]">Settings</h1>
      <section className="w-full h-[222px] flex-shrink-0 my-6 border-b-[1px] border-gray-600">
        <Profile></Profile>
      </section>
      <section className="flex-grow overflow-scroll hide-scrollbar">
        <PersonalInfo />
        <Privacy />
        <Security />
        <Theme />
        <Help />
      </section>
    </main>
  );
}

export default Setting;
