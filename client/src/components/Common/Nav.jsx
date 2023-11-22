import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.svg";
import defaultPic from "../../assets/profile.jpg";
import { setNavWindow } from "../../context/String/StringSlice";
import { Icon } from "@iconify/react";
import { icons } from "../../utils/icons.util";





// Nav Sub-Section
function NavSubSection({ children }){
  return (
    <section className="w-full h-full xl:h-auto flex xl:flex-col justify-between items-center gap-4">
      {children}
    </section>
  )
}


// Nav Button Container
function NavButtonContainer({ children, isSelected, onClick }){
  return (
    <button
      onClick={onClick}
      className={`w-12 xl:w-14 aspect-square flex justify-center items-center rounded-xl transition duration-300 text-[1.4rem] text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:bg-l-primary-hoverBg-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:hover:text-d-primary-txt-color  ${
      isSelected && 'text-[#7269ef] bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color'
    }`}>
    {children}
  </button>
  )
}


// Nav Logo 
function NavLogo(){
  return (
      <img src={logo} className="w-full h-full p-[10px]" alt="Logo" />
  )
}


// Nav Profile Image
function NavProfileImg({  picture='', handleClick }){
  return (
    <img src={ picture === '' && defaultPic} className="w-full h-full p-[10px] rounded-full" />
  )
}



function Nav() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const { profile, chats, groups, contacts, settings, darkMode, lightMode, language } = icons;
  const { profile_picture } = useSelector(state => state.UserSlice);
  const { navWindow } = useSelector(state => state.StringSlice);

  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[width])

  return (
    <nav className="w-full h-full flex justify-between items-center xl:flex-col flex-shrink-0 bg-l-primary-bg-color dark:bg-util-color-1">
      { width >= 1280 && <NavSubSection>
        <NavButtonContainer>
          <NavLogo />
        </NavButtonContainer>
      </NavSubSection>}
      <NavSubSection>
        <NavButtonContainer isSelected={navWindow === 'profile'} onClick={() => dispatch(setNavWindow("profile"))}>
          <Icon icon={icons.profile} className={`${navWindow === 'profile' && 'text-[#7269ef]'}`} />
        </NavButtonContainer>
        <NavButtonContainer isSelected={navWindow === 'chats'} onClick={() => dispatch(setNavWindow("chats"))}>
          <Icon icon={icons.chats} className={`${navWindow === 'chats' && 'text-[#7269ef]'}`}  />
        </NavButtonContainer>
        <NavButtonContainer isSelected={navWindow === 'groups'} onClick={() => dispatch(setNavWindow("groups"))}>
          <Icon icon={icons.groups} className={`${navWindow === 'groups' && 'text-[#7269ef]'}`}  />
        </NavButtonContainer>
        <NavButtonContainer isSelected={navWindow === 'connections'} onClick={() => dispatch(setNavWindow("connections"))} >
          <Icon icon={icons.connections} className={`${navWindow === 'connections' && 'text-[#7269ef]'}`}  />
        </NavButtonContainer>
        <NavButtonContainer isSelected={navWindow === 'settings'} onClick={() => dispatch(setNavWindow("settings"))}>
          <Icon icon={icons.settings} className={`${navWindow === 'settings' && 'text-[#7269ef]'}`}  />
        </NavButtonContainer>
      </NavSubSection>
      { width >= 1280 && <NavSubSection>
        <NavButtonContainer   handleClick={() => dispatch(setNavWindow("profile"))}>
          <NavProfileImg picture={profile_picture} />
        </NavButtonContainer>
      </NavSubSection>}
    </nav>
  );
}

export default React.memo(Nav);



{/* <button
onClick={() => dispatch(setNavWindow("profile"))}
className={`xl:hidden p-3 xl:p-4 rounded-xl border-2`}>
<img src="#" alt="" className="w-[30px] h-[30px] rounded-full" />
</button> */}

        {/* <button
          onClick={() => dispatch(setNavWindow("profile"))}
          className={`p-3 xl:p-4 rounded-xl relative`}>
          <img src={profile_picture} alt="" className="w-[30px] h-[30px] rounded-full" />
          <div className="absolute bottom-full left-full border-2 ">
            <button>Logout</button>
          </div>
        </button> */}


        // text-[1.4rem] bg-l-primary-bg-color dark:bg-[#36404a] text-l-secondary-txt-color dark:text-d-secondary-txt-color