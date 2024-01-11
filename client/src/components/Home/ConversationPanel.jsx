// Imports
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Back from './Back';
import ConnectionInfo from './ConversationPanel_Nav/ConnectionInfo/ConnectionInfo';
import SearchMessages from './ConversationPanel_Nav/SearchMessages/SearchMessages';
import AudioCall from './ConversationPanel_Nav/AudioCall/AudioCall';
import VideoCall from './ConversationPanel_Nav/VideoCall/VideoCall';
import Menu from './ConversationPanel_Nav/Menu/Menu';
import ConversationMessages from './ConversationPanel_MessageBox.jsx/ConversationMessages';




// Conversation Panel
function ConversationPanel() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const conversationPanelRef = useRef(null);
  const messageBoxRef = useRef(null);

  // Animation for Conversation Panel
  useEffect(() => {
    if(width >= 1280) gsap.from(conversationPanelRef.current, { xPercent: -5 }, { xPercent: 0 });
    else gsap.from(conversationPanelRef.current, {yPercent: -10 }, { yPercent: 0 });
  }, [])

  // Window Resizing 
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <section ref={conversationPanelRef} className='flex flex-col flex-grow bg-primary-light dark:bg-primary-dark '>
      <div className='border-2 w-full h-[75px] flex justify-between items-center'>
        <div className='flex items-center'>
          <Back />
          <ConnectionInfo />
        </div>
        <div className='flex items-center'>
          <SearchMessages />
          <AudioCall />
          <VideoCall />
          <Menu />
        </div>
      </div>
      <div className='flex-grow relative'>
        <ConversationMessages />
      </div>
      <div className='border-2 w-full h-[75px]'>

      </div>
    </section>
  )
}


// Exports
export default React.memo(ConversationPanel);