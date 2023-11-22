import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


// Theme
function Theme() {
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state) => state.NavigateModesSlice);
  const [edit, setEdit] = useState(false);

  return (
    <div className={`px-1 my-2 ${''}`}>
      <div
        onClick={() => ''}
        className={`flex justify-between px-3 py-1 rounded-sm ${""}`}>
        <label htmlFor="light">Light</label>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          checked={true}
        />
      </div>
      <div
        onClick={() => ''}
        className={`flex justify-between px-3 py-1 rounded-sm ${
          ""
        }`}>
        <label htmlFor="dark">Dark</label>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          checked={true}
        />
      </div>
      <div
        onClick={() => ''}
        className={`flex justify-between px-3 py-1 rounded-sm ${
          ""
        }`}>
        <label htmlFor="system">System default</label>
        <input
          type="radio"
          id="system"
          name="theme"
          value="system"
          checked={true}
        />
      </div>
    </div>
  );
}

export default Theme;
