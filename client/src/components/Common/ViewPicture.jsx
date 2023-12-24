import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Icon } from '@iconify/react';
import { icons } from '../../utils/icons.util';
import defaultPic from "../../assets/profile.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { setViewPicture } from '../../context/Boolean/booleanSlice';
import { formSubmitter } from '../../utils/formSubmitter.util';
import { MiddlewareArray } from '@reduxjs/toolkit';


function ViewPicture({ picture }) {
  const dispatch = useDispatch();
  const { viewPicture } = useSelector(state => state.BooleanSlice);
  const parentViewRef = useRef(null);
  const childViewRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  useEffect(() => {
    const parentElement = parentViewRef.current;
    const childElement = childViewRef.current;
    const minDimenstion = Math.min(width-32, height-100);
    const child_state1 = { width: 0, height: 0, display: 'none'};
    const child_state2 = { width: minDimenstion, height: minDimenstion, display: 'flex'}

    if(viewPicture){
      gsap.to(parentElement, { display: 'flex'});
      gsap.fromTo(childElement, child_state1, child_state2);
    }else{
      gsap.fromTo(childElement, child_state2, child_state1);
      gsap.to(parentElement, { display: 'none'});
    }

  }, [viewPicture])
  
  return (
    <div ref={parentViewRef} className={`w-screen h-screen hidden fixed z-50 justify-center items-center bg-[#fff7] dark:bg-[#0007]`}>
      <div ref={childViewRef} className={`${width < height ? 'w-full' : 'h-full'} aspect-square flex-col gap-2 z-50`}>
        <div className='flex justify-end'>
          <button onClick={() => dispatch(setViewPicture(false))}>
            <Icon icon={icons.cancel} className='text-xl text-l-primary-txt-color dark:text-d-primary-txt-color ' />
          </button>
        </div>
        <img src={picture || defaultPic} alt='pic' className='w-full h-full rounded-md overflow-hidden shadow-md relative z-50' />
      </div>
    </div>

  )
}

export default ViewPicture;


