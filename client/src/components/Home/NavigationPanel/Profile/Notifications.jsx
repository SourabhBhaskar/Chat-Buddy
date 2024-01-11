import { useState } from "react";


function Notifications({ notification=false, setNotifications }){
  const [toggleNotifications, setToggleNotifications] = useState(notification);

  const handleToggleNotification = () => {
    setToggleNotifications(!toggleNotifications);
    setNotifications(toggleNotifications);
  }

  return (
    <div className={`flex justify-between items-center rounded-md p-4 `}>
      <span className=" text-l-primary-txt-color dark:text-d-primary-txt-color" >Notifications</span>
      <div onClick={handleToggleNotification} className="border-[1px] w-[30px] h-4 px-[1px] ring-2 ring-[#7269ef] rounded-lg flex items-center justify-between cursor-pointer">
        <div className={`bg-d-primary-bg-color dark:bg-l-primary-bg-color shadow-md w-[10px] h-[10px] rounded-full transition-all ${ toggleNotifications && 'translate-x-4 tex'}`}></div>
      </div>
    </div>
  )
}


export default Notifications;