import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Common/Loader';
import Navigation from '../components/Home/Navigation/Navigation';
import NavigationPanel from '../components/Home/NavigationPanel/NavigationPanel';
import ConversationPanel from '../components/Home/ConversationPanel/ConversationPanel';
import ConnectionProfile from '../components/Home/NavigationPanel/Profile/ConnectionProfile'; 
import { useSocket } from '../socket/socket-client';
import ViewPicture from '../components/Common/ViewPicture';


// Home
function Home() {
  useSocket();
  const { isChatRoomOpen, isReceiverProfileOpen, viewPicture } = useSelector(state => state.BooleanSlice);
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
      <ViewPicture /> 
      <main className='w-screen h-screen relative flex flex-col xl:flex-row overflow-hidden'>   
        {(!isChatRoomOpen || width >= 1280) &&
        <section className="w-full xl:w-[75px] h-[60px] xl:h-full relative flex-shrink-0 order-last xl:order-first">
          <Navigation />
        </section>}

        {(!isChatRoomOpen || width >= 1280) && <section className='flex-grow xl:flex-grow-0 xl:flex-shrink-0 xl:w-[385px] relative overflow-hidden'>
          <NavigationPanel />
        </section>}
        
        {((isChatRoomOpen && !isReceiverProfileOpen) || width >= 1280) &&
        <section className='flex-grow relative'>
          <ConversationPanel />
        </section>}
        
        {((isReceiverProfileOpen && isChatRoomOpen)) &&
        <section className='flex-grow xl:flex-grow-0 xl:flex-shrink-0 xl:w-[385px] relative overflow-hidden'>
          <ConnectionProfile />
        </section>}
      </main>
    </>
  )
}


// Export
export default Home;





