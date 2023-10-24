import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { useSendMessage } from "../../services/socketIO";
import { socket } from "../../services/socketIO";
import _ from "lodash";

// Message Input
function Input({ inputRef }) {
  const { chatRoomContact } = useSelector((state) => state.ProfileSlice);
  const receiver = chatRoomContact.email;
  const lastSeen = chatRoomContact.last_seen;

  // Debounce the handleChange function to limit event frequency
  const debouncedHandleChange = _.debounce(
    () => socket.emit("typing", receiver),
    300
  );

  const handleChange = () => {
    if (lastSeen === 'online' || lastSeen === 'typing...') 
      debouncedHandleChange();
    else console.log(`${receiver} is not online`);
  };

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="Type a message"
      className="w-[90%] h-[45px] px-5 rounded-l-lg bg-[#a6b0cf11] text-white"
      ref={inputRef}
    />
  );
}

// Send Button
function Send({ inputRef }) {
  const { sendMessage } = useSendMessage();
  const { chatRoomContact } = useSelector((state) => state.ProfileSlice);

  const handleSendMessage = () => {
    const message = inputRef.current.value.trim();
    if (message === "") return;
    else inputRef.current.value = "";
    sendMessage(message);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter") handleSendMessage();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chatRoomContact]);

  return (
    <button
      onClick={handleSendMessage}
      className="flex-shrink-0 w-[10%] sm:w-[80px] lg:w-[90px] h-[45px] px-2 cursor-pointer rounded-r-lg bg-[#a6b0cf11] flex items-center justify-center text-[#7269ef] hover:text-[#7269efcc] text-2xl">
      <Icon icon="ic:round-send" />
    </button>
  );
}

// Message Input Bar
function SendMessage() {
  const inputRef = useRef(null);
  return (
    <div className="w-full h-auto flex-shrink-0 flex items-center p-3 border-t-[1px] border-gray-700">
      <Input inputRef={inputRef} />
      <Send inputRef={inputRef} />
    </div>
  );
}

export default SendMessage;
