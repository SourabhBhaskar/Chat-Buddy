import React, { useEffect, useState, useContext } from 'react';
import { DarkModeContext, ChatRoomScreenModeContext } from '../context/Modes';
import Nav from '../components/Nav';
import ChatRoom from '../components/ChatRoom';
import Profile from '../components/Profile';
import Chats from '../components/Chats';
import Groups from '../components/Groups';
import PhoneBook from '../components/PhoneBook';
import Setting from '../components/Setting';
import { NavContext } from '../context/Nav';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const { mode, setMode } = useContext(DarkModeContext);
  const { chatMode, setChatMode } = useContext(ChatRoomScreenModeContext);
  const { nav, setNav } = useContext(NavContext);
  const darkMode = mode ? 'bg-[#262e35] text-white' : 'bg-[whitesmoke] text-black';

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <main className={`w-screen h-screen flex ${darkMode} font-publicSans relative`}>
      <button onClick={()=>navigate('/counter')}>Go to Counter</button>
      { 
        ((!chatMode) || width >1280) &&
        <section className={`w-full h-full xl:w-[460px] flex-shrink-0 flex-col flex xl:flex-row-reverse`}>
          <div className='flex-grow bg-[#303841] relative'>
            {nav === 'profile' && <Profile key="profile" />}
            {nav === 'chats' && <Chats key="chats" />}
            {nav === 'groups' && <Groups key="groups" />}
            {nav === 'setting' && <Setting key="setting" />}
            {nav === 'phone-book' && <PhoneBook key="phone-book" />}
          </div>
          <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative flex-shrink-0 bg-[#36404a11]'>
            <Nav />
          </div>
        </section>
      }
      { 
        chatMode && 
        <section className={`flex-grow bg-[#262e35] chatroom-move`}>
          <ChatRoom key="chat-room" />
        </section>
      }
    </main>
  )
}

export default Home;


