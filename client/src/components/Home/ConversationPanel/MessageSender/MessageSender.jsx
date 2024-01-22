import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageSendButton from './MessageSendButton';
import Emoji from './Emoji';
import SendMore from './SendMore';



function MessageSender() {
  const [inpValue, setInpval] = useState('');

  return (
    <div className='w-full h-[75px] flex flex-shrink-0 gap-8 py-3 px-2 border-t-[1px] border-primary-light dark:border-primary-dark'>
      <MessageInput value={inpValue} onChange={(e) => setInpval(e.target.value)} />
      <Emoji />
      <SendMore />
      <MessageSendButton value={inpValue} onChange={(v) => setInpval(v)} />
    </div>
  )
}

export default MessageSender;