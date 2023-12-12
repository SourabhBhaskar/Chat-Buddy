import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { Icon } from "@iconify/react";
import { icons } from "../../../../../../utils/icons.util";



// Status List
function StatusList({ status, handleSubmit }) {
  const menuRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const statusList = ['Available', 'Busy', 'Long Distance', 'Working Hard', 'Only Urgent Calls', 'Text Me, If Urgent'];

  // Toggle the edit mode
  const handleEdit = () => setIsEditing(!isEditing);

  // Handle status change and exit edit mode
  const handleChangeStatus = (newValue) => {
    handleEdit();
    handleSubmit({ name: 'Status', value: newValue});
  };

  useEffect(() => {
    const menu = menuRef.current;
    gsap.fromTo(
      menu,
      { y: isEditing ? "200" : "150" },
      {
        y: isEditing ? "150" : "200",
        duration: 0.5,
        ease: "ease",
        opacity: isEditing ? 1 : 0,
        display: isEditing ? "block" : "none",
      }
    );
  }, [isEditing]);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-2 relative z-10">
      <div onClick={handleEdit} className='flex items-center cursor-pointer text-[1rem] text-l-secondary-txt-color dark:text-d-secondary-txt-color'>
         <p className="text-sm">{status}</p>
         <button className={`text-xl mt-[2px] transition-all ${isEditing ? "rotate-0" : "rotate-180"}`}>
           <Icon icon={icons.expend} />
         </button>
       </div>
       <div ref={menuRef} className="w-auto h-auto absolute hidden rounded-md shadow-md border-[1px] dark:bg-d-primary-bg-color bg-l-primary-bg-color border-l-primary-border dark:border-d-primary-border">
          <div className='p-4'>
           {statusList.map((status) => (<p onClick={() => handleChangeStatus(status)} className='w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden text-md hover:bg-l-primary-hoverBg-color text-l-secondary-txt-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' key={status}>{status}</p> ))}
          </div>
        </div>
    </div>
  )
}


export default StatusList;