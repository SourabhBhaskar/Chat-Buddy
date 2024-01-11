import React from "react";


// Day Time
function DayTime({ Message }) {
    const dayTime = "Today";
    return (
      <div className="w-full h-auto flex justify-center py-4">
        <p className="text-white opacity-90 bg-[#fff1] p-2 rounded-lg text-xs">
          Today
        </p>
      </div>
    );
  }


  export default React.memo(DayTime);