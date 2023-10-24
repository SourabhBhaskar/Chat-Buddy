import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHomeNavigator } from "../../context/NavigateModes";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";

const navigationItems = [
  { id: "profile", icon: "ri:user-2-line" },
  { id: "chats", icon: "ri:message-3-line" },
  { id: "groups", icon: "ri:group-line" },
  { id: "contacts", icon: "ri:contacts-line" },
  { id: "setting", icon: "ri:settings-2-line" },
];

function Nav() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.NavigateModesSlice);

  return (
    <nav
      className={`w-full h-full flex justify-center items-center flex-shrink-0 bg-[#a6b0cf11]`}>
      <section className="w-full h-full flex flex-col justify-between text-xl xl:text-2xl">
        <div className="w-full h-[70px] hidden xl:flex flex-col justify-around items-center">
          <img src={logo} className="w-[30px]" alt="Logo" />
        </div>

        <div className="w-full h-full xl:h-[332px] flex xl:flex-col justify-around items-center">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => dispatch(setHomeNavigator(item.id))}
              className={`p-3 xl:p-4 rounded-xl hover:bg-[#a6b0cf11] ${
                current === item.id ? "bg-[#a6b0cf11] text-[#7269ef]" : ""
              }`}>
              <Icon icon={item.icon} />
            </button>
          ))}
          <button
            onClick={() => dispatch(setHomeNavigator("profile"))}
            className={`xl:hidden p-3 xl:p-4 rounded-lg`}>
            <img src="#" alt="" className="w-[30px] h-[30px] rounded-full" />
          </button>
        </div>

        <div className="w-full h-[196px] hidden xl:flex flex-col justify-around items-center">
          <button
            onClick={() => dispatch(setHomeNavigator("language"))}
            className={`p-3 xl:p-4 rounded-xl hover-bg-[#a6b0cf11] ${
              current === "language" ? "bg-[#a6b0cf11] text-[#7269ef]" : ""
            }`}>
            <Icon icon="ri:global-line" />
          </button>
          <button
            onClick={() => dispatch(setHomeNavigator("themeMode"))}
            className={`p-3 xl:p-4 rounded-xl hover-bg-[#a6b0cf11] ${
              current === "themeMode" ? "bg-[#a6b0cf11] text-[#7269ef]" : ""
            }`}>
            <Icon icon="ri:sun-line" />
          </button>
          <button
            onClick={() => dispatch(setHomeNavigator("profile"))}
            className={`p-3 xl:p-4 rounded-lg`}>
            <img src="#" alt="" className="w-[30px] h-[30px] rounded-full" />
          </button>
        </div>
      </section>
    </nav>
  );
}

export default React.memo(Nav);
