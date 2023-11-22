import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav/Nav';
import ChatBox from './ChatBox/ChatBox';
import Input from './Input/Input';
import Back from '../Common/Back';
import Avatar from './Nav/Avatar';
import SearchMessages from './Nav/SearchMessages';
import AudioCall from './Nav/AudioCall';
import VideoCall from './Nav/VideoCall';
import Menu from './Nav/Menu';
import MsgInput from './Input/MsgInput';
import MsgSendBtn from './Input/MsgSendBtn';
import Emoji from './Input/Emoji';
import SendMore from './Input/SendMore';
import { setIsChatRoomOpen } from '../../context/Boolean/booleanSlice';



function ChatRoom() {
  const inpRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { 
    username, 
    email, 
    phone, 
    profile_picture, 
    status, 
    last_seen, 
    location
  } = useSelector(state => state.ConnectionsSlice).currentConnection;


  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <section className={`w-full h-full relative flex flex-col`}>
      <Nav>
        <div className='w-auto h-full flex justify-center items-center'>
          { width < 1280 && <Back exit={() => dispatch(setIsChatRoomOpen(false))} />}
        </div>
        <div className='flex-grow h-full flex justify-start items-center '>
          <Avatar username={username} profile_picture={profile_picture} last_seen={last_seen} />
        </div>
        <div className='w-auto h-full flex justify-center items-center gap-8 text-xl '>
          <SearchMessages/>
          <AudioCall/>
          <VideoCall/>
          <Menu/> 
        </div>
      </Nav>
      <ChatBox></ChatBox>
      <Input>
        <MsgInput inpRef={inpRef} />
        <Emoji />
        <SendMore />
        <MsgSendBtn inpRef={inpRef} />
      </Input>
    </section>
  )
}

export default React.memo(ChatRoom);