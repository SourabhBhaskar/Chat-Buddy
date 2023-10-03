import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/common_/Nav';
import ChatRoom from '../components/ChatRoom/ChatRoom';
import Profile from '../components/profile/Profile';
import Chats from '../components/chats_/Chats';
import Groups from '../components/groups/Groups';
import Contacts from '../components/contacts/Contacts';
import Setting from '../components/setting_/Setting';


function Home() {
  const chatMode = useSelector((state) => state.ChatModeSlice);
  const navigate = useSelector((state) => state.NavigateSlice);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <main className={`w-screen h-screen flex font-publicSans relative`}>
      { 
        ((!chatMode) || width >1280) &&
        <section className={`w-full h-full xl:w-[460px] flex-shrink-0 flex-col flex xl:flex-row-reverse z-[5]`}>
          <div className='flex-grow bg-[#303841] text-white relative'>
            {navigate === 'profile' && <Profile key="profile" />}
            {navigate === 'chats' && <Chats key="chats" />}
            {navigate === 'groups' && <Groups key="groups" />}
            {navigate === 'setting' && <Setting key="setting" />}
            {navigate === 'phone-book' && <Contacts key="phone-book" />}
          </div>
          <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative flex-shrink-0 bg-[#303841] text-[#a6b0cf] z-0'>
            <Nav />
          </div>
        </section>
      }
      { 
        chatMode && 
        <section className={`flex-grow bg-[#262e35] chatroom-move `}>
          <ChatRoom key="chat-room" />
        </section>

      }
      { 
        !chatMode && 
        <section className={`flex-grow bg-[#262e35] chatroom-move -z-40`}>
        </section>

      }

    </main>
  )
}

export default Home;


