import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import gsap from 'gsap';
import { Icon } from "@iconify/react";
import { icons } from "../../utils/icons.util";
import { setRemovePopUpWindow} from "../../context/GlobalContext/global.slice";


function PopUpWindow({ value, index }) {
  const dispatch = useDispatch();
  const windowRef = useRef(null);

  useEffect(() => {
    const element = windowRef.current;
    const timeOut = setTimeout(() => {
      dispatch(setRemovePopUpWindow(index));
    }, 2000);

    if(element){
      gsap.fromTo(element, { yPercent: -20 }, { yPercent: 20 });
    }
    return () => {
      gsap.killTweensOf(element);
      clearTimeout(timeOut);
    }
  }, [])

  return (
    <div ref={windowRef} className={`flex items-center gap-2 p-4 my-2 rounded-md text-white font-semibold ${value.isError ? 'bg-red-500' : 'bg-green-500'} `}>
      <h1 className="w-full">{value.message}</h1>
      <button onClick={() => dispatch(setRemovePopUpWindow(index))} className="text text-[#fffd] hover:text-white transition-all">
        <Icon icon={icons.cancel} />
      </button>
    </div>
  );
}


function PopUpWindows() {
  const { popUpWindows } = useSelector((state) => state.GlobalSlice);
  return (
    <div className="w-auto h-auto max-h-screen fixed left-1/2 -translate-x-1/2 top-0 py-8 overflow-y-scroll hide-scrollbar">
      {popUpWindows.map((value, index) => <PopUpWindow key={index} value={value} index={index} />)}
    </div>
  );
}


export default PopUpWindows;
