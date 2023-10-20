import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useReceiveMessage } from '../services/socketIO';
import useCheckAuthentication from '../services/isAuthenticated';
import Loader from '../components/Common/Loader';
import Nav from '../components/Common/Nav';
import Profile from '../components/Profile/Profile'
import ChatRoom from '../components/ChatRoom/ChatRoom';
import Chats from '../components/Chats_/Chats';
import Groups from '../components/Groups/Groups';
import Contacts from '../components/Contacts/Contacts';
import Setting from '../components/setting_/Setting';


function Home() {
  const isAuthenticated = useCheckAuthentication();
  useEffect(()=>{
    isAuthenticated();
  }, [])

  const { receiveMessage } = useReceiveMessage();

  const chatMode = useSelector((state) => state.NavigateModesSlice).chatMode;
  const homeNavigator = useSelector((state) => state.NavigateModesSlice).homeNavigator
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <>
      <Loader />
      <main className={`w-screen h-screen flex font-publicSans relative`}>  
        {((!chatMode) || width >1280) &&
        <section className={`w-full h-full xl:w-[460px] flex-shrink-0 flex-col flex xl:flex-row-reverse z-[5]`}>
          <div className='flex-grow bg-[#303841] text-white relative'>
            {homeNavigator === 'profile' && <Profile key="profile" />}
            {homeNavigator === 'chats' && <Chats key="chats" />}
            {homeNavigator === 'groups' && <Groups key="groups" />}
            {homeNavigator === 'contacts' && <Contacts key="contacts" />}
            {homeNavigator === 'setting' && <Setting key="setting" />}
          </div>
          <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative flex-shrink-0 bg-[#303841] text-[#a6b0cf] z-0'>
            <Nav />
          </div>
        </section>}

        {chatMode && <section className={`flex-grow bg-[#262e35] chatroom-move `}><ChatRoom key="chat-room" /></section> }
        {!chatMode && <section className={`flex-grow bg-[#262e35] chatroom-move -z-40`}></section> }

      </main>
    </>
  )
}


export default Home;


