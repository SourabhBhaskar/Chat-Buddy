// Imports
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav/Nav";
import MessageBox from "./MessageBox/MessageBox";
import MessageSender from "./MessageSender/MessageSender";


// Conversation Panel
function ConversationPanel() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight)
  const { currentConnection } = useSelector((state) => state.ConnectionsSlice);

  // Window Resizing
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return currentConnection ? (
    <section className="flex-grow flex flex-col bg-primary-light dark:bg-primary-dark">
      <Nav />
      <MessageBox />
      <MessageSender />
    </section>
  ) : (
    <section className="flex-grow relative overflow-hidden">
      <div className="absolute w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-center text-5xl font-extrabold py-4 mx-auto text-main-color">
          ChatBuddy
        </h1>
      </div>
    </section>
  );
}

// Exports
export default React.memo(ConversationPanel);
