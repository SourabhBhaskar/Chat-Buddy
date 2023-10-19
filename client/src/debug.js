import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProfileUsername } from './context/Profile';

function Username(){
    console.log("Username")
    const name = useSelector((state) => state.ProfileSlice).username;
    return <h1>{name}</h1>
}


function UpdateUsername(){
    console.log("Update Username")
    const dispatch = useDispatch();
    const handleClick = () => dispatch(setProfileUsername('Farjana'));
    return <button onClick={handleClick}>Chang Name</button>
}


function Debug() {
  return (
    <main className='text-white'>
        <h1>Debug</h1>
        <Username />
        <UpdateUsername />
    </main>
  )
}

export default Debug