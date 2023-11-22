import { useState } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../Common/Theme";
import { Icon } from "@iconify/react";


// Expendable Div
function ExpendableComponent({ p, children }) {
  const { primaryTxt, primaryBg, secondaryBg, border, commonBg } = useTheme();
  const [expend, setExpend] = useState(false);

  return (
    <div
      className={`w-full h-auto my-2 rounded-sm shadow-sm cursor-pointer border-[1px] ${primaryTxt} ${border}`}>
      <div
        onClick={() => setExpend(!expend)}
        className={`w-full h-[45px] flex justify-between items-center px-4 rounded-sm ${secondaryBg}`}>
        <p className="text-[14px] font-[600]">{p}</p>
        <button
          className={`material-symbols-outlined text-[16px] transition-all ${ expend ? "rotate-0 " : "rotate-180 "}`}>
          <Icon icon="iconamoon:arrow-up-2" />
        </button>
      </div>
      {expend && <div className={`h-auto transition-all p-4 ${primaryBg}`}>{children}</div>}
    </div>
  );
}

export default ExpendableComponent;
