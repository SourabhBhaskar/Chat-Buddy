import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { _receiverProfile } from '../context/NavigateModes';
import Loader from '../components/Common/Loader';
import Navigation from '../components/Home/Navigation/Navigation';
import ConversationPanel from '../components/Home/Conversation Panel/ConversationPanel';
import Chats from '../components/Chats/Chats';
import Groups from '../components/Groups/Groups';
import Connections from '../components/Connections/Connections';
import Setting from '../components/Setting/Setting';
import SenderProfile from '../components/Profile/SenderProfile';
import ReceiverProfile from '../components/Profile/ReceiverProfile';


// Home
function Home() {
  const { navWindow } = useSelector(state => state.StringSlice);
  const { isChatRoomOpen, isReceiverProfileOpen } = useSelector(state => state.BooleanSlice);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);
  
  return (
    <>
      <Loader />
      <main className='w-screen h-screen relative flex flex-col xl:flex-row overflow-hidden'>
        
        {(!isChatRoomOpen || width >= 1280) &&
        <section className="w-full xl:w-[75px] h-[60px] xl:h-full relative flex-shrink-0 order-last xl:order-first">
          <Navigation />
        </section>}

        {(!isChatRoomOpen || width >= 1280) &&
        <section className='flex-grow xl:flex-grow-0 xl:flex-shrink-0 xl:w-[385px] relative flex flex-col overflow-hidden bg-l-secondary-bg-color dark:bg-d-secondary-bg-color'>
          {navWindow === 'profile' && <SenderProfile />}
          {navWindow === 'chats' && <Chats />}
          {navWindow === 'groups' && <Groups />}
          {navWindow === 'connections' && <Connections />}
          {navWindow === 'settings' && <Setting />}
        </section>}
        
        {((isChatRoomOpen && !isReceiverProfileOpen) || width >= 1280) &&
        <section className='flex-grow relative'>
          <ConversationPanel />
        </section>}
        
        {((isReceiverProfileOpen && isChatRoomOpen)) &&
        <section className='flex-grow xl:flex-grow-0 xl:flex-shrink-0 xl:w-[385px] relative'>
          <ReceiverProfile />
        </section>}

      </main>
    </>
  )
}


// Export
export default Home;





