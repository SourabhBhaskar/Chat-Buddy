import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '../../../Common/Theme';


function ViewPicture({ picture, exit, children }) {
  console.log(picture)
  const { secondaryTxtWithHover, border } = useTheme();
  const handleExitClick = () => exit(false);
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-50 flex flex-col justify-center items-center p-10 bg-[#111a]">
      <div className={`w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] relative move-top-to-bottom`}>
        <button onClick={handleExitClick} className={`w-full flex justify-end text-xl py-2 ${secondaryTxtWithHover}`}>
          <Icon icon="gridicons:cross" />
        </button>
        <img src={picture} alt="pic" className={`w-full aspect-square rounded-md shadow-md border-[1px] ${border}`} />
      </div>
      {children}
    </div>
  )
}

export default ViewPicture;


