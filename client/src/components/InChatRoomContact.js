import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InChatRoomContactContext  } from "../context/chatRoomContext";
import dp from '../assets/dp.png';




function Profile() {
  const { inChatRoomContact, setInChatRoomContact } = useContext(InChatRoomContactContext);

  return (
    <div className='h-full w-full flex items-center gap-1 rounded-full'>
        <img src={inChatRoomContact.profilePic ? inChatRoomContact.profilePic : dp} className='w-[60px] h-[60px] rounded-full bg-red-600' />
        <p className='text-white text-[1.1rem] font-medium'>{inChatRoomContact.name}</p>
    </div>
  )
}

function InChatRoomContact() {
  const navigate = useNavigate();
  
  return (
    <div className={`w-full h-[10%] flex justify-between items-center px-1`}>
      <Profile />
      <div onClick={ ()=> navigate('/contacts')}>Back</div>
    </div>
  );
}

export default InChatRoomContact;
