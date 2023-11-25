import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";



// Status List
function StatusList({ value ,handleSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const statusList = ['Available', 'Busy', 'Long Distance', 'Working Hard', 'Only Urgent Calls', 'Text Me, If Urgent'];

  // Toggle the edit mode
  const handleEdit = () => setIsEditing(!isEditing);

  // Handle status change and exit edit mode
  const handleChangeStatus = (newValue) => {
    handleEdit();
    handleSubmit({ name: 'Status', value: newValue});
  };

  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <div onClick={handleEdit} className='flex items-center cursor-pointer text-[1rem] text-l-secondary-txt-color dark:text-d-secondary-txt-color'>
        <p className="text-sm">{value}</p>
        <button className={`text-xl mt-[2px] transition-all ${isEditing ? "rotate-0" : "rotate-180"}`}>
          <Icon icon={icons.expend} />
        </button>
      </div>
      {isEditing && 
        <div className="w-full h-auto shadow-md flex justify-center relative top-2 z-10">
          <div className='w-auto absolute rounded-md overflow-scroll shadow-lg border-[1px] p-4 hide-scrollbar dark:bg-d-primary-bg-color bg-l-primary-bg-color border-l-primary-border dark:border-d-primary-border'>
            {statusList.map((value) => (<p onClick={() => handleChangeStatus(value)} className='w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden text-md hover:bg-l-primary-hoverBg-color text-l-secondary-txt-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' key={value}>{value}</p> ))}
          </div>
        </div>
      }
    </div>
  )
}

export default StatusList;