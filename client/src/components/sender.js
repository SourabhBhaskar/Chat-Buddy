import React, { useContext } from "react";
import Group from "./group";
import Menu from "./menu";
import NewChat from "./newChat";
import { states } from "../context/contactList";
import { DisplayMode } from "../context/displayMode";




function Profile() {
    return (
      <div className='h-full w-[60%] flex items-center gap-1 rounded-full'>
          <img src={states.myProfile.profilePic} className='h-[80%] w-auto aspect-[1] rounded-full bg-red-600' />
          <p className='truncate text-white text-[1.1rem] font-medium'>{states.myProfile.name}</p>
      </div>
    )
}

function Sender() {
    const { mode, setMode } = useContext(DisplayMode)
    const handleClick = (m) => setMode(m);

    return (
        <div className={`w-full h-full flex justify-between items-center relative`}>
            <Profile name="Superman " />
            <div className="w-[35%] flex justify-end gap-3 2xl:gap-5">
                <Group />
                <NewChat />
                <span className={`material-symbols-outlined ${mode === "split" ? "hidden" : "hidden xl:flex"}`}onClick={() => handleClick("split")}>splitscreen_left</span>
                <span className={`material-symbols-outlined ${mode === "split" ? "hidden" : "flex"}`} onClick={() => handleClick("right")}>right_panel_close</span>
                <span className={`material-symbols-outlined ${mode === "left" ? "hidden" : "flex"}`}onClick={() => handleClick("left")}>fullscreen</span>
                <Menu />
            </div>
        </div>
    );
}

export default Sender;
