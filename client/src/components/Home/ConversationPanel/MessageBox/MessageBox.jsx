import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import Message from './Message';

function MessageBox() {
  const messageBoxRef = useRef();
  const { currentConnection, all} = useSelector(state => state.ConnectionsSlice);
  const messages = all[currentConnection].messages.messageList;

  useEffect(() => {
    messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className='flex-grow relative'>
      <div ref={messageBoxRef} className='w-full h-full absolute overflow-y-scroll hide-scrollbar'>
        { messages.map((message, index) => <Message message={message} key={index} />)}
      </div>
    </div>
  )
}

export default MessageBox;