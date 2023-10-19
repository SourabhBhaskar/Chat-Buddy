import React, { useState } from "react";
import ExpendableComponent from "../Common/ExpendableComponent";
import ThemeSaveChanges from "./ThemeSaveChanges";


// Theme
function Theme() {

  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [edit, setEdit] = useState(false);
  const states = {
    edit: edit,
  }
  const setStates = {
    setEdit: setEdit,
  };

  function handleEdit(theme){
    setEdit(true);
    setSelectedTheme(theme);
  }

  return (
    <ExpendableComponent p={"Theme"} key="theme">
      <div className="px-1 my-2 text-white">
      <form>
  <div onClick={() => handleEdit('light')} className={`flex justify-between px-3 py-1 rounded-sm ${selectedTheme === 'light' ? 'bg-[#a6b0cf11]' : ''}`}><label htmlFor="light">Light</label><input type="radio" id="light" name="theme" value="light" checked={selectedTheme === 'light'} /></div>
  <div onClick={() => handleEdit('dark')} className={`flex justify-between px-3 py-1 rounded-sm ${selectedTheme === 'dark' ? 'bg-[#a6b0cf11]' : ''}`}><label htmlFor="dark">Dark</label><input type="radio" id="dark" name="theme" value="dark" checked={selectedTheme === 'dark'} /></div>
  <div onClick={() => handleEdit('system')} className={`flex justify-between px-3 py-1 rounded-sm ${selectedTheme === 'system' ? 'bg-[#a6b0cf11]' : ''}`}><label htmlFor="system">System default</label><input type="radio" id="system" name="theme" value="system" checked={selectedTheme === 'system'} /></div>
</form>

        {edit && <div className="w-full flex justify-end px-3">
            <ThemeSaveChanges states={states} setStates={setStates} />
        </div>}
      </div>
    </ExpendableComponent>
  );
}

export default Theme;
