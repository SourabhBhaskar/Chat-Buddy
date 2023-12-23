// Imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';


// Conversation Messages
function ConversationMessages({ messagesRef }){
  const { all, currentConnection } = useSelector(state => state.ConnectionsSlice);
  const { messages } = all[currentConnection.email] || {};

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <section ref={messagesRef} className='px-4 flex-grow relative overflow-y-scroll hide-scrollbar'>
      {messages && messages.map((value, index) => <Message key={index} message={value} />)}
    </section>
  );
}


// Conversation Messages
export default React.memo(ConversationMessages);