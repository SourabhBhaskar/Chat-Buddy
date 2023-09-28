import React, { useRef } from 'react';
import { useChatBoxMessages} from '../context/ContactStates';


// Message Input
function Input({ inputRef }) {
  return (
    <input type='text' placeholder='Type a message' className='w-[90%] h-[45px] px-5 rounded-l-lg bg-[#fff1] text-white' ref={inputRef} />
  );
}


// Send Button
function Send({ inputRef }){
  const { handleSendMessage } = useChatBoxMessages(inputRef);
  const sendMessage = () => handleSendMessage(inputRef);
  return (
    <span className="material-symbols-outlined flex-shrink-0 w-[10%] sm:w-[80px] lg:w-[90px] h-[45px] px-2 cursor-pointer rounded-r-lg bg-[#fff1] flex items-center justify-center text-blue-600" onClick={sendMessage} >send</span>
  );
}


// Message Input Bar
export default function SendMessage() {
  const inputRef = useRef(null); 
  return (
    <div className='w-full h-auto flex-shrink-0 flex items-center p-3 border-t-[1px] border-gray-700'>
      <Input inputRef={inputRef} /> 
      <Send inputRef={inputRef} /> 
    </div>
  );
}

