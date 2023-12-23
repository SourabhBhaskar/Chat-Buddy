import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../../utils/icons.util';
import { gsap } from 'gsap/gsap-core';



function ExpendableDiv({ children, name }) {
  const [expend, setExpend] = useState(null);
  const contentDivRef = useRef(null);

  useEffect(() => {
    const element = contentDivRef.current;
    if(element && expend !== null){
        gsap.fromTo(element, { height: expend ? 0 : 100 }, { height: expend ? 100 : 0 });
    }
  })

  return (
    <div className='w-full h-auto relative rounded-sm shadow-sm my-2 border-[1px] border-l-primary-border dark:border-d-primary-border text-l-primary-txt-color dark:text-d-primary-txt-color group transition-all '>
        <div className='w-full h-[40px] flex justify-between items-center px-4 '>
            <h1 className='font-400 text-sm group-hover:text-l-primary-txt-color dark:group-hover:text-d-primary-txt-color transition-all'>{name}</h1>
            <button onClick={() => setExpend(!expend)} className={`transition-all text-xl duration-300 ${!expend ? 'rotate-180' : 'rotate-0 text-l-primary-txt-color dark:text-d-primary-txt-color'}`}>
                <Icon icon={icons.expend} />
            </button>
        </div>
        <div ref={contentDivRef} className='w-full h-0 bg-l-primary-bg-color dark:bg-d-primary-bg-color'>
            {children}
        </div>
    </div>
  )
}


export default React.memo(ExpendableDiv);