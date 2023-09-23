import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InChatRoomContactContext  } from "../context/chatRoomContext";
import { DarkModeContext } from "../context/Modes";
import dp from '../assets/dp.png';



// Back Button
function Back(){
  const { mode, setMode } = useContext(DarkModeContext);

  function handleClick(){
    setMode(!mode);
  }
  return (
    <button onClick={handleClick}>
      <i className="fa-solid fa-ellipsis-vertical text-gray-300 active:text-white text-xs"></i>
    </button>
  )
}

function Menu(){
  return (
    <div className="w-auto h-full">
      <Back />
    </div>
  );
}

function Profile() {
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

  return (
    <section className="w-full flex justify-between items-center">
      <div className='h-full w-full flex items-center gap-4'>
        <div className="inline-block text-xs text-gray-300 active:text-white"><i className="fa-solid fa-chevron-left" ></i></div>
        <div className="flex items-center gap-2">
          <img src={inChatRoomContact.profile_picture ? inChatRoomContact.profile_picture : dp} className='w-[50px] h-[50px] rounded-full bg-red-600' />
          <div>
            <p className='text-white text-[1rem] font-medium'>{inChatRoomContact.username}</p>
            <small>Online</small>
          </div>
        </div>
      </div>
      <Menu />
    </section>
  )
}

function ChatRoomNav() {
  const navigate = useNavigate();
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

  return (
    <div className={`w-full h-[70px] flex-shrink-0 flex justify-center items-center text-white px-4 border-b-[1px] border-gray-700`} >
      <Profile />
      {/* <Menu /> */}
    </div>
  );
}

export default ChatRoomNav;
