import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap/gsap-core";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";
import { setUserBioDataThunk } from "../../../../context/UserContext/extraReducers/userBioData.extraReducer";
import { findUrl } from "../../../../utils/findUrl.util";



// Status List
function StatusList({ status }) {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const statusList = ['Available', 'Busy', 'Long Distance', 'Working Hard', 'Only Urgent Calls', 'Text Me, If Urgent'];

  // Handle status change and exit edit mode
  const handleChangeStatus = (newValue) => {
    setIsEditing(!isEditing);
    dispatch(setUserBioDataThunk({url: findUrl('Status'), name: 'Status', value: newValue }));
  };

  useEffect(() => {
    const element = menuRef.current;
    if(element){
      if(isEditing){
        gsap.to(element, { yPercent: 10, opacity: 1, display: 'block' });
      }else{
        gsap.to(element, { yPercent: 40, opacity: 0, display: 'none'});
      }
    }
  }, [isEditing]);

  return (
    <div className="w-auto flex flex-col items-center relative">
      <button onClick={() => setIsEditing(!isEditing)} className="flex items-center justify-center text-sm text-secondary-light dark:text-secondary-dark">
        <span className="text-center">{status}</span>
        <Icon icon={icons.expend} fontSize={20} className={`transition-all duration-500 ${isEditing && 'rotate-180'}`} />
      </button>
      <div ref={menuRef} className="w-auto h-auto absolute z-10 hidden mx-auto p-4 rounded-md shadow-md bg-primary-light dark:bg-primary-dark ">
        {statusList.map((status) => <p onClick={() => handleChangeStatus(status)} className='text-center p-2 rounded-md text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover transition-all' key={status}>{status}</p>)}
      </div>
    </div>
  )
}


export default StatusList;