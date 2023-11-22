import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../../utils/icons.util";
import { Icon } from "@iconify/react";
// import { useSendMessage } from "../../../services/socketIO";
// import { socket } from "../../../services/socketIO";
import _, { includes } from "lodash";
// import { setUpdateMessage } from "../../../context/Contacts/ContactsSlice";


// Emoji
function Emoji(){
  return (
    <div className="flex items-center">
      <button  className='te text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color hover:dark:text-d-primary-txt-color'>
        <Icon icon={icons.emoji} className="text-xl" />
      </button>
    </div>
  )
}


// Multi Media
function SendMore(){
  return (
    <div className="flex items-center relative">
      <button  className='te text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color hover:dark:text-d-primary-txt-color'>       
        <Icon icon={icons.sendMore} className="text-xl" />
      </button>
    </div>
  )
}




// Send Button
function MsgSend({ inputRef }) {
  const dispatch = useDispatch();
  // const { chatRoomContact } = useSelector((state) => state.ContactsSlice);

  const handleSendMessage = () => {
    const message = inputRef.current.value.trim();
    if (message === "") return;
    else inputRef.current.value = "";
    // dispatch(setUpdateMessage({ message: message, updateTo: chatRoomContact }));
  };

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "Enter") 
  //       handleSendMessage();
  //   }
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [chatRoomContact]);

  return (
    <button
      onClick={handleSendMessage}
      className={`h-[45px] px-6 rounded-md text-xl text-white bg-[#7269ef] hover:bg-[#7269efee]`}>
      <Icon icon={icons.send} />
    </button>
  );
}


// Message Input Bar
function Input({ children }) {
  const inputRef = useRef(null);

  return (
    <div className='w-full h-[80px] flex-shrink-0 flex items-center gap-8 p-3 border-t-[1px] border-l-primary-border dark:border-d-primary-border'>
      {/* <MsgInput inputRef={inputRef} />
      <Emoji />
      <SendMore />
      <MsgSend inputRef={inputRef} /> */}
      {children}
    </div>
  );
}

export default Input;
