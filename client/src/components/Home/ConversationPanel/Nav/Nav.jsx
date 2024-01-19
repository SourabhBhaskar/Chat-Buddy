import React from 'react';
import { useDispatch } from 'react-redux';
import { setChatRoom } from '../../../../context/GlobalContext/global.slice';
import Back from '../../Back';
import ConnectionInfo from './ConnectionInfo/ConnectionInfo';
import SearchMessages from './SearchMessages/SearchMessages';
import AudioCall from './AudioCall/AudioCall';
import VideoCall from './VideoCall/VideoCall';
import Menu from './Menu/Menu';


function Nav() {
  const dispatch = useDispatch();

  return (
    <div className='w-full h-[75px] flex flex-shrink-0 justify-between items-center px-2 border-b-[1px] border-primary-light dark:border-primary-dark'>
        <div className='flex items-center gap-4'>
            <Back onClick={() => dispatch(setChatRoom(false))} />
            <ConnectionInfo />
        </div>
        <div className='flex items-center gap-10'>
            <SearchMessages />
            <AudioCall />
            <VideoCall />
            <Menu />
        </div>
    </div>
  )
}

export default Nav