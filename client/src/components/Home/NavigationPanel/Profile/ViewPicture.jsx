import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';
import defaultPic from "../../../../assets/profile.jpg";


function ViewPicture({ picture, viewPicture, setViewPicture, children }) {
  const viewRef = useRef(null);
  useEffect(() => {
    const element = viewRef.current;
    if(element){
      if(viewPicture){
        gsap.fromTo(element, { y: 200, opacity: 0}, { y: 0, opacity: 1 });
      }else{
        gsap.fromTo(element, { y: 0, opacity: 1}, { y: 200, opacity: 1 });
      }
    }
  }, [viewPicture]);
  
  return (
    <div className='w-screen h-screen fixed left-0 top-0 z-10  flex items-center justify-center p-4 bg-[#fffa] dark:bg-[#000a]'>
      <div ref={viewRef} className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] relative'>
        <button onClick={() => setViewPicture(false)} className='w-full flex justify-end text-xl py-2 text-primary-light dark:text-primary-dark'>
          <Icon icon={icons.cancel} />
        </button>
        <img src={picture} alt="pic" className='w-full aspect-square rounded-md shadow-lg border-[1px] border-primary-light dark:border-primary-dark ' />
      </div>
      {children}
    </div>

  )
}

export default ViewPicture;


