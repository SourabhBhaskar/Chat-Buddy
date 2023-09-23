import React, { useContext } from 'react'
import { DarkModeContext } from '../context/Modes';
import { NavContext } from '../context/Nav';




function Nav() {
  const { mode, setMode } = useContext(DarkModeContext);
  const { nav, setNav } = useContext(NavContext);
  const darkMode = mode ? 'text-[#a6b0cf] hover:bg-[#a6b0cf11] hover:text-white' : 'text-[#000b] hover:bg-[#a6b0cf44] hover:text-black';
  console.log(nav)
  return (
    <nav className={`w-full h-full flex justify-center items-center`}>
      <div className='w-full h-full max-h-[450px] flex xl:flex-col items-center justify-around'>
        <button onClick={()=>setNav('profile')}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-user`}></i></button>
        <button onClick={()=>setNav('chats')}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-message text-[0.85rem]`}></i></button>
        <button onClick={()=>setNav('groups')}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-user-group text-[0.85rem]`}></i></button>
        <button onClick={()=>setNav('phone-book')}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-address-book`}></i></button>
        <button onClick={()=>setNav('setting')}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-gear`}></i></button>
        <button onClick={()=>setMode(!mode)}><i className={`${darkMode} w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-circle-half-stroke`}></i></button>
      </div>
    </nav>
  )
}

export default Nav