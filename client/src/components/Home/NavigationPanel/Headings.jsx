import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../utils/icons.util";


function Heading({ headingText, headingType, btnIcon, handleBtnClick }){
  return (
    <section className='w-full h-[80px] flex-shrink-0 text-xl font-semibold text-primary-light dark:text-primary-dark'>
      { headingType === 'simple-heading' && <h1 className="w-full h-full flex justify-start items-center">{headingText}</h1> }
      { headingType === 'heading-with-front-btn' && 
      <div className="w-full h-full flex justify-start items-center gap-2">
        <button onClick={handleBtnClick} >
          <Icon icon={icons[btnIcon]} fontSize={22} />
        </button>
        <h1>{headingText}</h1>
      </div>}
      { headingType === 'heading-with-right-btn' &&
        <div className="w-full h-full flex justify-between items-center">
          <h1>{headingText}</h1>
          <button onClick={handleBtnClick}  >
            <Icon icon={icons[btnIcon]} fontSize={22} className='transition-all text-secondary-light hover:text-primary-light dark:text-secondary-dark hover:dark:text-primary-dark' />
          </button>
        </div>}
    </section>
  )
}

export default React.memo(Heading);


