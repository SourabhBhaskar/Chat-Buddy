import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import { gsap } from 'gsap/gsap-core';


function ExpendableDiv({ children, name }) {
  const [expend, setExpend] = useState(null);
  const contentDivRef = useRef(null);

  useEffect(() => {
    const element = contentDivRef.current;
    if(element && expend !== null){
        gsap.fromTo(element, { height: expend ? 0 : 100 }, { height: expend ? 100 : 0 });
    }
  }, [expend])

  return (
    <div onClick={() => setExpend(!expend)} className='w-full h-auto relative rounded-[3px] shadow-sm my-2 group border-[1px] border-primary-light dark:border-primary-dark'>
        <div className='w-full h-[40px] flex justify-between items-center px-4 '>
            <h1 className='text-sm font-semibold text-primary-light dark:text-primary-dark transition-all duration-300'>{name}</h1>
            <Icon icon={icons.expend} fontSize={16} className={`flex items-center justify-centertransition-all duration-500 border-0 ${expend ? 'rotate-180 text-primary-light dark:text-primary-dark' : 'rotate-0 text-secondary-light dark:text-secondary-dark'}`}></Icon>
        </div>
        <div ref={contentDivRef} className='w-full bg-primary-light dark:bg-primary-dark'>
          {children}
        </div>
    </div>
  )
}


export default React.memo(ExpendableDiv);