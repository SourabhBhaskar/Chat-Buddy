import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';


function ViewPicture({ picture, isViewing, exit, children }) {
  const viewRef = useRef(null);
  // useEffect(() => {
  //   const view = viewRef.current;
  //     gsap.fromTo(
  //       view,
  //       { y: isViewing ? "80" : "0" },
  //       {
  //         y: isViewing ? "0" : "40",
  //         duration: 0.5,
  //         ease: "ease",
  //         opacity: isViewing ? 1 : 0,
  //         display: isViewing ? "flex" : "none",
  //       }
  //     );
  // }, [isViewing]);
  
  return (
    <div ref={viewRef} className='w-screen h-screen fixed left-0 top-0 z-50 flex-col justify-center items-center p-10 bg-[#fffa] dark:bg-[#000a] border-2 border-blue-600'>
      {/* <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] relative'>
        <button onClick={() => exit()} className='w-full flex justify-end text-xl py-2 text-l-secondary-txt-color hover:text-l-primary-txt-color dark:text-d-secondary-txt-color dark:hover:text-d-primary-txt-color'>
          <Icon icon={icons.cancel} />
        </button>
        <img src={picture} alt="pic" className='w-full aspect-square rounded-md shadow-md border-[1px] border-l-primary-border dark:border-d-primary-border' />
      </div>
      {children} */}
    </div>

  )
}

export default ViewPicture;


