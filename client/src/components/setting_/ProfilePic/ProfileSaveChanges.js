import React from "react";
import { Icon } from "@iconify/react";


// Save Changes
function SaveChanges({ states, setStates }){
    // Handle Save
    function handleSaveChanges(haveToSave){
      setStates.setShowSC(false);
      if(haveToSave){
        setStates.setCurrImg(states.imgURL);
      }else{
        setStates.setCurrImg(states.currImg);
        setStates.setImgURL(null);
      }
    }
  
    return states.showSC && (
      <div className="w-[150px] flex justify-between text-sm mx-auto py-2">
        <button onClick={()=>handleSaveChanges(true)} className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Save</button>
        <button onClick={()=>handleSaveChanges(false)} className="w-[60px] px-2 py-1 mx-2 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Cancel</button>
      </div>
    )
}

export default SaveChanges;