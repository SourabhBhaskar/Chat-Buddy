// Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/logo.svg";
import defaultPic from "../../../assets/profile.jpg";
import { setNavWindow } from "../../../context/String/StringSlice";
import { icons } from "../../../utils/icons.util";
import SubSection from "./SubSection";
import Logo from "./Logo";
import IconButton from "./IconButton";
import ImgRoundedButton from "./ImgRoundedButton";


// Navigation Panel
function Navigation() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const { profile_picture } = useSelector((state) => state.UserSlice);
  const { navWindow } = useSelector((state) => state.StringSlice);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <nav className="w-full h-full px-6 py-1 xl:p-2 flex justify-between items-center xl:flex-col flex-shrink-0 bg-l-primary-bg-color dark:bg-util-color-1">
        {width >= 1280 &&
        <SubSection>
            <Logo 
                key="logo" 
                img={logo} 
            />
        </SubSection>}

        <SubSection>
            <IconButton
            key="profile"
            icon={icons.profile}
            isSelected={navWindow === "profile"}
            onClick={() => dispatch(setNavWindow("profile"))}
            />
            <IconButton
            key="chats"
            icon={icons.chats}
            isSelected={navWindow === "chats"}
            onClick={() => dispatch(setNavWindow('chats'))}
            />
            <IconButton
            key="groups"
            icon={icons.groups}
            isSelected={navWindow === "groups"}
            onClick={() => dispatch(setNavWindow('groups'))}
            />
            <IconButton
            key="connections"
            icon={icons.connections}
            isSelected={navWindow === "connections"}
            onClick={() => dispatch(setNavWindow('connections'))}
            />
            <IconButton
            key="settings"
            icon={icons.settings}
            isSelected={navWindow === "settings"}
            onClick={() => dispatch(setNavWindow('settings'))}
            />
        </SubSection>

        { width >= 1280 &&
        <SubSection>
            <ImgRoundedButton 
                img={profile_picture || defaultPic } 
                onClick={() => dispatch(setNavWindow('profile'))} 
            />
        </SubSection>}
    </nav>
  );
}


// Export
export default React.memo(Navigation);
