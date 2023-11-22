import React, { useState } from "react";
import { useTheme } from "../../../Common/Theme";
import { Icon } from "@iconify/react";



// Status List
function StatusList({ value ,handleSubmit }) {
  const { primaryBg, secondaryTxt, border, commonBgHover, secondaryTxtWithHover } = useTheme();
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
    <div className={`w-full h-auto flex flex-col items-center`}>
      <div onClick={handleEdit} className={`flex items-center cursor-pointer text-[1rem] ${ secondaryTxt }`}>
        <p className="text-sm">{value}</p>
        <button className={`text-xl mt-[2px] transition-all ${isEditing ? "rotate-0" : "rotate-180"}`}>
          <Icon icon="iconamoon:arrow-up-2" />
        </button>
      </div>
      {isEditing && 
        <div className="w-full h-auto shadow-md flex justify-center relative top-2 z-10">
          <div className={`w-auto absolute rounded-md overflow-scroll shadow-lg border-[1px] p-4 hide-scrollbar ${border} ${primaryBg}`}>
            {statusList.map((value) => (<p onClick={() => handleChangeStatus(value)} className={`w-full h-auto truncate p-2 text-center rounded-md transition-all cursor-pointer overflow-hidden text-md ${commonBgHover} ${secondaryTxt} ${secondaryTxtWithHover}`} key={value}>{value}</p> ))}
          </div>
        </div>
      }
    </div>
  )
}

export default StatusList;