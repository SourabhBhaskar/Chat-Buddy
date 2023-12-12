import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../../../../utils/icons.util";

function Heading({ headingText, headingType, btnIcon, handleBtnClick }){
  return (
    <section className='w-full h-[80px] flex-shrink-0 font-medium text-[1.2rem] text-l-primary-txt-color dark:text-d-primary-txt-color'>
      { headingType === 'simple-heading' && <h1 className="w-full h-full flex justify-start items-center">{headingText}</h1> }
      { headingType === 'heading-with-front-btn' && 
      <div className="w-full h-full flex justify-start items-center gap-2">
        <button onClick={handleBtnClick} >
          <Icon icon={icons[btnIcon]} className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' />
        </button>
        <h1>{headingText}</h1>
      </div>}
      { headingType === 'heading-with-right-btn' &&
        <div className="w-full h-full flex justify-between items-center">
          <h1>{headingText}</h1>
          <button onClick={handleBtnClick}  >
            <Icon icon={icons[btnIcon]} className='text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color' />
          </button>
        </div>}
    </section>
  )
}

export default React.memo(Heading);


