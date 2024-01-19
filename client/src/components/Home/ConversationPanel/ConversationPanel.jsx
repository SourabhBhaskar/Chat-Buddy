// Imports
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav/Nav";
import MessageBox from "./MessageBox/MessageBox";
import MessageSender from "./MessageSender/MessageSender";


// Conversation Panel
function ConversationPanel() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const conversationPanelRef = useRef(null);
  const messageBoxRef = useRef(null);
  const { currentConnection } = useSelector((state) => state.ConnectionsSlice);

  // // Animation for Conversation Panel
  // useEffect(() => {
  //   if(width >= 1280) gsap.from(conversationPanelRef.current, { xPercent: -5 }, { xPercent: 0 });
  //   else gsap.from(conversationPanelRef.current, {yPercent: -10 }, { yPercent: 0 });
  // }, [])

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
    <section ref={conversationPanelRef} className="flex-grow flex flex-col bg-primary-light dark:bg-primary-dark">
      <Nav />
      <MessageBox />
      <MessageSender />
    </section>
  ) : (
    <section className="flex-grow relative overflow-hidden">
      <div className="absolute w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-center text-4xl font-extrabold py-4 mx-auto text-main-color">
          ChatBuddy
        </h1>
        <h2 className="text-center text-2xl font-semibold text-primary-light dark:text-primary-dark">
          k
        </h2>
        <p className="text-center text-secondary-light dark:text-secondary-dark">
          Welcom to ChatBuddy
        </p>
      </div>
    </section>
  );
}

// Exports
export default React.memo(ConversationPanel);