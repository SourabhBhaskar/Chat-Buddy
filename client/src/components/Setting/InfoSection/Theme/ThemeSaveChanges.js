import React from "react";


// Save Changes
function ThemeSaveChanges({ states, setStates }){
    // Handle Save
    function handleSaveChanges(haveToSave){
      setStates.setEdit(false);
      if(haveToSave){
        // setStates.setCurrImg(states.imgURL);
      }else{
        // setStates.setCurrImg(states.currImg);
        // setStates.setImgURL(null);
      }
    }
  
    return  (
      <div className="w-[140px] flex justify-between text-sm py-2">
        <button onClick={()=>handleSaveChanges(true)} className="w-[60px] px-2 py-1 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Save</button>
        <button onClick={()=>handleSaveChanges(false)} className="w-[60px] px-2 py-1 rounded-md bg-[#7269ef] text-white shadow-md transition-all duration-300 hover:bg-[#5c54d3]">Cancel</button>
      </div>
    )
}

export default ThemeSaveChanges;