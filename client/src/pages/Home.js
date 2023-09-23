import React, { useEffect, useState, useContext } from 'react';
import { DarkModeContext } from '../context/Modes';
import Nav from '../components/Nav';
import ChatRoom from '../components/ChatRoom';
import Profile from '../components/Profile';
import Chats from '../components/Chats';
import Groups from '../components/Groups';
import PhoneBook from '../components/PhoneBook';
import Setting from '../components/Setting';
import { NavContext } from '../context/Nav';






// function Home() {
//   const { mode, setMode } = useContext(DarkModeContext);
//   const { nav, setNav } = useContext(NavContext);
//   const darkMode = mode ? 'bg-[#262e35] text-white' : 'bg-[whitesmoke] text-black';

//   return (
//     <main className={`w-full h-full relative flex ${darkMode}`}>
//       <section className='w-full h-full xl:w-[460px] relative flex flex-col xl:flex-row'>
//         <div className='flex-grow xl:w-[360px] relative'>
//           { nav==='profile' && <Profile /> }
//           { nav==='chats' && <Chats /> }
//           { nav==='groups' && <Groups /> }
//           { nav==='setting' && <Setting /> }
//           { nav==='phone-book' && <PhoneBook /> }
//         </div>
//         <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative xl:-order-1 flex-shrink-0'><Nav /></div>
//       </section>
//       <section className='flex-grow relative bottom-0 hidden xl:flex'>
//         <div className='w-full h-full relative'><ChatRoom /></div>
//       </section>
//     </main>
//   )
// }

function Home() {
  const { mode, setMode } = useContext(DarkModeContext);
  const { nav, setNav } = useContext(NavContext);
  const darkMode = mode ? 'bg-[#262e35] text-white' : 'bg-[whitesmoke] text-black';

  return (
    <main className={`w-full h-full relative flex ${darkMode} font-publicSans`}>
      <section className='w-full h-full xl:w-[460px] relative flex flex-col xl:flex-row'>
        <div className='flex-grow xl:w-[360px] relative'>
          {nav === 'profile' && <Profile key="profile" />}
          {nav === 'chats' && <Chats key="chats" />}
          {nav === 'groups' && <Groups key="groups" />}
          {nav === 'setting' && <Setting key="setting" />}
          {nav === 'phone-book' && <PhoneBook key="phone-book" />}
        </div>
        <div className='w-full h-[60px] xl:w-[75px] xl:h-full relative xl:-order-1 flex-shrink-0'>
          <Nav />
        </div>
      </section>
      <section className='flex-grow relative bottom-0 hidden xl:flex'>
        <div className='w-full h-full relative'>
          <ChatRoom key="chat-room" />
        </div>
      </section>
    </main>
  )
}

export default Home;


