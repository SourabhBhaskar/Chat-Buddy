// Imports
import { useState } from "react";
import { useDispatch } from "react-redux";


// Notification
function Notification({ showNotification }){
  const [notification, setNotification] = useState(false);

  return (
    <div className={`flex justify-between items-center rounded-md p-4 `}>
      <span className=" text-l-primary-txt-color dark:text-d-primary-txt-color" >Notification</span>
      <div onClick={() => setNotification(!notification)} className="border-[1px] w-[30px] h-4 px-[1px] ring-2 ring-[#7269ef] rounded-lg flex items-center justify-between">
        <div className={`bg-d-primary-bg-color dark:bg-l-primary-bg-color shadow-md w-[10px] h-[10px] rounded-full transition-all ${ notification && 'translate-x-4'}`}></div>
      </div>
    </div>
  )
}


export default Notification;