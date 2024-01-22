import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { socket } from '../../../../socket/socket-client';


function Input({ value, onChange }){
  const { currentConnection, all } = useSelector(state => state.ConnectionsSlice);

  useEffect(() => {
    const debouncedSocketEmitOnline = debounce(() => {
      socket.emit('connection-status', { receiverId: currentConnection, message: 'online' });
    }, 300);

    const debouncedSocketEmit = debounce((receiverId, message) => {
      socket.emit('connection-status', { receiverId, message });
      debouncedSocketEmitOnline()
    }, 300);

    const isOnline = all[currentConnection].bio.last_seen === 'Online' || all[currentConnection].bio.last_seen === 'Typing...';
    isOnline && debouncedSocketEmit(currentConnection, 'typing...');
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


