import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNotifictionConnection } from "../../../../../Hooks/userConnections/useNotifictionConnection.hook";


function Notifications({ isNotificationOn=false, connectionEmail }){
  const checkboxParentRef = useRef();
  const noficationConnection = useNotifictionConnection();

  const handleChange = (e) => {
    noficationConnection.submit({ connectionEmail, isNotificationOn: !isNotificationOn });
  }

  // useEffect(() => {
  //   const element = checkboxParentRef.current;
  //   let animation;
  
  //   if (element) {
  //     if (noficationConnection.isLoading) {
  //       animation = gsap.to(element, {
  //         boxShadow: '0 0 0 1px white',
  //         repeat: -1,
  //         yoyo: true,
  //         duration: 0.5,
  //       });
  //     }
  //   }
  
  //   return () => {
  //     if (animation) {
  //       animation.kill();
  //     }
  //   };
  // }, [noficationConnection.isLoading]);
  

  return (
    <button className="w-full p-2 flex items-center justify-between">
      <h1 className="text-primary-light dark:text-primary-dark">Notifcations</h1>
      <div ref={checkboxParentRef} className={`relative flex items-center w-9 h-5 rounded-full bg-secondary-light dark:bg-main-color ring-2 dark:ring-0 ring-main-color transition-all`}>
        <input type="checkbox" value={isNotificationOn} checked={isNotificationOn} disabled={noficationConnection.isLoading} className={`relative translate-x-1 checked:translate-x-5 transition-all after:w-4 after:h-4 after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-main-color dark:after:bg-white`} onChange={handleChange} />
      </div>
    </button>
  )
}


export default Notifications;