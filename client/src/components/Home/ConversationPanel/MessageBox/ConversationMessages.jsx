// Imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';


// Conversation Messages
function ConversationMessages({  }){
  const { all, currentConnection } = useSelector(state => state.ConnectionsSlice);
  const { messages } = all[currentConnection.email] || {};

  useEffect(() => {
    // messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <section className='border-2 border-red-600 w-full h-full absolute overflow-y-scroll hide-scrollbar'>
      {messages && messages.map((value, index) => <Message key={index} message={value} />)}
    </section>
  );
}


// Conversation Messages
export default React.memo(ConversationMessages);