import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';


function LabeledInput({ 
  label, 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  error, 
  setError,
  icon
}){
  const errRef = useRef(null);
  useEffect(() => {
    const element = errRef.current;
    if(element){
      if(error){
        gsap.to(element, { bottom: -15, opacity: 1, duration: 0.3, ease: 'power3.out' });
      } else {
        gsap.to(element, { bottom: 0, opacity: 0, duration: 0.3, ease: 'power3.out' });
      }
    }
    return () => gsap.killTweensOf(element);
  }, [error])

  return (
    <div className="flex flex-col relative">
      <label className="text-sm font-semibold text-primary-light dark:text-primary-dark">{label}</label>
      <div className="w-auto h-[45px] flex border-[1px] border-primary-light dark:border-primary-dark rounded-[4px]">
        <div className='h-full aspect-square flex flex-shrink-0 justify-center items-center border-r-[1px] border-primary-light dark:border-primary-dark text-secondary-light dark:text-secondary-dark'>
          <Icon icon={icon} fontSize={16} />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={() => setError('')}
          className='flex-grow bg-transparent px-2 text-sm text-secondary-light dark:text-secondary-dark placeholder:text-secondary-light placeholder:dark:text-secondary-dark'
        />
      </div>
      <p ref={errRef} className='w-full text-xs text-red-600 truncate absolute bottom-0 pr-8'>{error}</p>
    </div>
  )
}

export default LabeledInput;

