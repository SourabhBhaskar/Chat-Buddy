import { useDispatch } from "react-redux";
import { useTheme } from "../../Common/Theme";


function Notification({ showNotification }){
  const dispatch = useDispatch();
  const {primaryBg, mainBg, primaryTxt, secondaryBg} = useTheme();

  // Handle Notification
  const handleNotification = () => '' // dispatch(setNotification(!showNotification));

  return (
    <div className={`flex justify-between items-center rounded-md p-4 ${primaryBg}`}>
      <span className={`${primaryTxt}`}>Notification</span>
      <div onClick={handleNotification}className={`w-8 h-4 flex items-center rounded-full cursor-pointer transition-all ${showNotification ? mainBg : secondaryBg} `}>
        <div className={`w-3 h-3 bg-white rounded-full transition-transform shadow-md ${showNotification ? 'translate-x-[18px]' : 'translate-x-[2px]'}`}></div>
      </div>
    </div>
  )
}


export default Notification;