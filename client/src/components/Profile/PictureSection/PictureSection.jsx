import React from "react";
import { useTheme } from "../../Common/Theme";


function PictureSection({ children }) {
  const { border } = useTheme();
  return (
    <section className={`w-full h-auto mx-auto pb-6 relative flex-shrink-0 border-b-[1px] ${border}`}>
      {children}
    </section>
  );
}

export default PictureSection;