import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../context/Nav';
import Nav from '../components/Nav';
import ChatRoom from '../components/ChatRoom';
import Profile from '../components/Profile';
import Chats from '../components/Chats';
import Groups from '../components/Groups';
import AllContactList from '../components/AllContactList';
import Setting from '../components/Setting';


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
        <section className={`w-full h-full xl:w-[460px] flex-shrink-0 flex-col flex xl:flex-row-reverse`}>
          <div className='flex-grow bg-[#303841] text-white relative'>
            {navigate === 'profile' && <Profile key="profile" />}
            {navigate === 'chats' && <Chats key="chats" />}
            {navigate === 'groups' && <Groups key="groups" />}
            {navigate === 'setting' && <Setting key="setting" />}
            {navigate === 'phone-book' && <AllContactList key="phone-book" />}
          </div>
          <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative flex-shrink-0 bg-[#303841] text-[#a6b0cf]'>
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


