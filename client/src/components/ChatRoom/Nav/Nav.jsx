import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsChatRoomOpen } from "../../../context/Boolean/booleanSlice";
import { useTheme } from "../../Common/Theme";
import Back from "../../Common/Back";
import Menu from "./Menu";
import SearchMessages from "./SearchMessages";
import AudioCall from "./AudioCall";
import VideoCall from "./VideoCall";
import Avatar from "./Avatar";



// Nav
// function Nav(){
//   const dispatch = useDispatch();
//   const { all, chatRoomContact } = useSelector((state) => state.ContactsSlice);
//   const { username, last_seen, profile_picture } = chatRoomContact && all[chatRoomContact];
//   const handlBack = () => {
//     dispatch(setIsChatRoomOpen(false));
//   }

//   return (
//     <section className={`w-full h-[80px] flex-shrink-0 flex gap-2 px-4 border-2`}>
//       <div className="w-auto h-full flex items-center">
//         <Back exit={handlBack}/>
//       </div>
//       <div className="w-auto h-full flex items-center justify-center">
//         <Avatar username={username} profile_picture={profile_picture} last_seen={last_seen}/>
//       </div>
//       <div className="w-auto h-full flex-grow flex justify-end items-center gap-8 text-xl">
//         <SearchMessages />
//         <AudioCall />
//         <VideoCall />
//         <Menu />
//       </div>
//     </section>
//   );
// }


// export default React.memo(Nav);



function Nav({ children }) {
  return (
    <section className='w-full h-[80px] flex-shrink-0 flex gap-2 px-4 border-b-[1px] border-l-primary-border dark:border-d-primary-border'>
      {children}
    </section>
  )
}

export default Nav;