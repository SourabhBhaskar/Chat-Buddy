import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { navigate } from '../context/Nav';




function Nav() {
  const dispatch = useDispatch();

  return (
    <nav className={`w-full h-full flex justify-center items-center flex-shrink-0 bg-[#a6b0cf22]`}>
      <div className='w-full h-full max-h-[450px] flex xl:flex-col items-center justify-around'>
        <button onClick={()=>dispatch(navigate('profile'))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-user`}></i></button>
        <button onClick={()=>dispatch(navigate('chats'))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-message text-[0.85rem]`}></i></button>
        <button onClick={()=>dispatch(navigate('groups'))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-user-group text-[0.85rem]`}></i></button>
        <button onClick={()=>dispatch(navigate('phone-book'))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-address-book`}></i></button>
        <button onClick={()=>dispatch(navigate('setting'))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-gear`}></i></button>
        {/* <button onClick={()=>setMode(!mode))}><i className={`w-[50px] aspect-square flex items-center justify-center rounded-lg transition-all fa-solid fa-circle-half-stroke`}></i></button> */}
      </div>
    </nav>
  )
}

export default Nav;