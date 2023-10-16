import { useState } from "react";

// Expendable Div
function ExpendableDiv({ p, children }) {
    const [expend, setExpend] = useState(false);
  
    return (
      <div className="w-full h-auto my-2 border-[1px] border-[#eff2f722] rounded-sm shadow-md cursor-pointer">
        <div
          onClick={() => setExpend(!expend)}
          className="w-full h-[40px] flex justify-between items-center px-4 bg-[#abb4d211] border-[1px] border-gray-700 rounded-sm">
          <p className="text-[14px] font-[600]">{p}</p>
          <span
            className={`material-symbols-outlined text-[20px] hover:text-white pt-[1px] transition-all ${
              expend ? "rotate-180 text-white" : "rotate-0 text-gray-300"
            }`}>
            expand_more
          </span>
        </div>
        {expend && (
          <div
            className={`h-[200px] border-[1px] border-t-[0px] border-gray-700 transition-all`}>
            {children}
          </div>
        )}
      </div>
    );
}

export default ExpendableDiv;

