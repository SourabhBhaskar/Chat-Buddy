import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { socket } from '../../../../socket/socket-client';


function Input({ value, onChange }){
  const { currentConnection, all } = useSelector(state => state.ConnectionsSlice);
  const [typingTimout, setTypingTimout] = useState(false);

  useEffect(() => {
    const debouncedSocketEmit = debounce((receiverId) => {
      clearTimeout(typingTimout);
      socket.emit('connection-status', { name: "typing...", value: { receiverId }});
      setTypingTimout(setTimeout(() => {
        socket.emit('connection-status', { name: "online", value: { receiverId }});
      }, 1000))
    }, 100);

    const isOnline = all[currentConnection].bio.last_seen === 'Online' || all[currentConnection].bio.last_seen === 'Typing...';
    isOnline && debouncedSocketEmit(currentConnection);
    return () => debouncedSocketEmit.cancel();
  }, [value])

  return (
    <input
        type="text"
        placeholder="Type a message"
        value={value}
        onChange={onChange}
        className='w-full h-full rounded-md px-4 bg-primary-light-hover dark:bg-primary-dark-hover text-primary-light dark:text-primary-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark'
    />
  )
}


export default Input;


