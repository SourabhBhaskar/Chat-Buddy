import React, { useContext, useState } from 'react';
import ContactRoom from '../components/ContactRoom';
import ChatRoom from '../components/ChatRoom';
import { ScreenModeContext } from '../context/screenMode';



function Home() {
  const { mode, setMode } = useContext(ScreenModeContext);
  return (
    <main className='bg-blue-600 w-full h-full relative'>
      <section className={`w-full h-full relative ${ mode ? 'hidden' : 'flex'}`}><ChatRoom /></section>
      <section className={`w-full h-full relative ${ mode ? 'flex' : 'hidden'}`}><ContactRoom /></section>
    </main>
  )
}

export default Home;