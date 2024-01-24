import React from "react";
import { useSelector } from "react-redux";

function GlobalLoader() {
  const { isLoading } = useSelector(state => state.GlobalSlice);
  return isLoading && (
      <div className="w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#0002] z-50">
        <div className="w-[50px] h-[50px] border-4 border-t-[#7269ef] rounded-full loader"></div>
      </div>
  );
}

export default GlobalLoader;
