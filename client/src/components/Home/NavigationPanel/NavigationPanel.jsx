// Imports
import React, { useState, useRef, useEffect} from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import UserProfile from './Profile/UserProfile';
// import Chats from './Chats/Chats';
import Connections from './Connections/Connections';
import Settings from './Settings/Settings';


// Navigation Panel
function NavigationPanel() {
  const navigationPanelRef = useRef(null);
  const { navigation } = useSelector(state => state.GlobalSlice);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    if(width >= 1280) gsap.from(navigationPanelRef.current, {xPercent: 10 }, { xPercent: 0 });
    else gsap.from(navigationPanelRef.current, {yPercent: -10 }, { yPercent: 0 });
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <div ref={navigationPanelRef} className='flex-grow xl:w-[385px] flex-shrink-0 xl:flex-grow-0 px-2 xl:px-4 bg-secondary-light dark:bg-secondary-dark border-y-[1px] xl:border-x-[1px] xl:border-y-[0px] border-primary-light dark:border-primary-dark'>
      { navigation === 'profile' && <UserProfile /> }
      {/* { navigation === 'chats' && <Chats />} */}
      { navigation === 'connections' && <Connections /> }
      { navigation === 'settings' && <Settings />}
    </div>
  )
}


// Exports
export default NavigationPanel;