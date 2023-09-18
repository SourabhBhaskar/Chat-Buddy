import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InChatRoomContactContext  } from "../context/chatRoomContext";
import { ScreenModeContext } from "../context/screenMode";
import dp from '../assets/dp.png';



function Profile() {
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

  return (
    <div className='h-full w-full flex items-center gap-1 rounded-full'>
        <img src={inChatRoomContact.profile_picture ? inChatRoomContact.profile_picture : dp} className='w-[60px] h-[60px] rounded-full bg-red-600' />
        <p className='text-white text-[1.1rem] font-medium'>{inChatRoomContact.username}</p>
    </div>
  )
}

function ChatRoomNav() {
  const navigate = useNavigate();
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);
  const { mode, setMode } = useContext(ScreenModeContext);

  function handleClick(){
    setMode(!mode);
    setInChatRoomContact(false);
  }
  
  return (
    <div className={`w-full h-[10%] flex justify-between items-center px-1 text-white`}>
      <Profile />
      <div onClick={ ()=> navigate('/home')}>
        <i className="fa-solid fa-chevron-left px-4" onClick={handleClick}></i>
      </div>
    </div>
  );
}

export default ChatRoomNav;
