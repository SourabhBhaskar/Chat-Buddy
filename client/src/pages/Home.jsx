import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIsAuthenticated } from "../Hooks/useIsAuthenticated.hook";
import Navigation from "../components/Home/Navigation";
import NavigationPanel from "../components/Home/NavigationPanel";
import ConversationPanel from "../components/Home/ConversationPanel";
import ConnectionProfile from "../components/Home/NavigationPanel/Profile/ConnectionProfile";
import GlobalLoader from "../components/GlobalComponents/GlobalLoader";

// Home
function Home() {
  useIsAuthenticated();
  const { chatRoom, connectionProfile, isAuthenticated } = useSelector((state) => state.GlobalSlice);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return isAuthenticated ? (
    <main className="w-screen h-screen overflow-hidden flex flex-col xl:flex-row">
      {(!chatRoom || width >= 1280) && <Navigation />}
      {(!chatRoom || width >= 1280) && <NavigationPanel />}
      {((chatRoom && !connectionProfile) || width >= 1280) && (<ConversationPanel />)}
      {connectionProfile && chatRoom && <ConnectionProfile />}
    </main>
  ) : <GlobalLoader />
}


export default Home;