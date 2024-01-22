import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Home/Navigation/Navigation";
import NavigationPanel from "../components/Home/NavigationPanel/NavigationPanel";
import ConversationPanel from "../components/Home/ConversationPanel/ConversationPanel";
import ConnectionProfile from "../components/Home/NavigationPanel/Profile/ConnectionProfile/ConnectionProfile";
import { useSocket } from "../socket/socket-client";


function Home() {
  useSocket();
  const { chatRoom, connectionProfile } = useSelector((state) => state.GlobalSlice);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return (
    <main className="w-screen h-screen overflow-hidden flex flex-col xl:flex-row">
      {(!chatRoom || width >= 1280) && <Navigation />}
      {(!chatRoom || width >= 1280) && <NavigationPanel />}
      {((chatRoom && !connectionProfile) || width >= 1280) && (<ConversationPanel />)}
      {connectionProfile && chatRoom && <ConnectionProfile />}
    </main>
  )
}


export default Home;