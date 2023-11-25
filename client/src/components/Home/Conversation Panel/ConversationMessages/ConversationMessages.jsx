// Imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


// Conversation Messages
function ConversationMessages({ children, messagesRef }){
  const { messages } = useSelector(state => state.ConnectionsSlice).currentConnection;

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  return (
    <section ref={messagesRef} className='px-4 flex-grow relative overflow-y-scroll hide-scrollbar'>
      {children}
    </section>
  );
}


// Conversation Messages
export default React.memo(ConversationMessages);