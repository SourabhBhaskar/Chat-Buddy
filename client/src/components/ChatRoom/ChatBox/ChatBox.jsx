import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Message } from './Message';


// Chat Box
function ChatBox(){
  const { messages } = useSelector(state => state.ConnectionsSlice).currentConnection;
  const currRef = useRef(null);

  useEffect(() => {
    currRef.current.scrollTop = currRef.current.scrollHeight;
  }, [messages]);

  return (
    <section ref={currRef} className='px-3 flex-grow overflow-y-scroll hide-scrollbar'>
      { messages.map((value, index)=> <Message key={index} message={value} />) }
    </section>
  );
}

export default ChatBox;


