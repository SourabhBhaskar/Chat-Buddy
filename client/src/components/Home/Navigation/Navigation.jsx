import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import defaultPic from "../../../assets/profile.jpg";
import { icons } from "../../../utils/icons.util";
import { Icon } from "@iconify/react";
import { setNavigation } from "../../../context/GlobalContext/global.slice";


// Navigation Panel
function Navigation() {
  const dispatch = useDispatch();
  const navBtns = ["profile", "chats", "groups", "connections", "settings"];

  const navRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const { navigation } = useSelector((state) => state.GlobalSlice);
  const { profile_picture } = useSelector(state => state.UserSlice);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <nav ref={navRef} className="w-full xl:w-[75px] h-[65px] xl:h-full flex xl:flex-col justify-between items-center order-1 xl:order-none flex-shrink-0 p-2 xl:py-4 bg-light-nav dark:bg-dark-nav">
      {width >= 1280 && <div>
        <Icon
          icon={icons.logo}
          fontSize={40}
          className="color color text-main-color"
        />
      </div>} 

      <div className="flex-grow h-full xl:flex-grow-0 xl:w-full xl:h-auto flex xl:flex-col justify-between xl:gap-2">
        {navBtns.map((value, index) => (
          <button
            onClick={() => dispatch(setNavigation(value))}
            key={index}
            className={`h-full aspect-square xl:w-full xl:h-auto rounded-md xl:rounded-xl flex justify-center items-center hover:bg-primary-light-hover hover:dark:bg-primary-dark-hover hover:shadow-x transition-all group ${
              navigation === value &&
              " bg-secondary-light-hover dark:bg-primary-dark-hover"
            }`}>
            <Icon
              icon={icons[value]}
              fontSize={24}
              className={`transition-all ${
                navigation === value
                  ? "text-[#7269ef]"
                  : "text-secondary-light group-hover:text-primary-light dark:text-secondary-dark dark:group-hover:text-primary-dark transition-all"
              }`}
            />
          </button>
        ))}
      </div>

      {width >= 1280 && (
        <button onClick={() => dispatch(setNavigation("profile"))} className={`relative overflow-hidden rounded-full ${!profile_picture && 'load-picture'}`}>
          <img src={profile_picture || defaultPic} alt="img" className="w-[36px] rounded-full" />
        </button>
      )} 
    </nav>
  );
}



export default React.memo(Navigation);
