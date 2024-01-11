import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


function FormContainer({ children, handleSubmit }) {
  
  const containerRef = useRef(null);
  useEffect(() => {
    const element = containerRef.current;
    if(element){
      gsap.fromTo(element, {y: -200 }, { y: 0 })
    }

    return () => gsap.killTweensOf(element);
  }, [])

  return (
    <div ref={containerRef} className='w-full max-w-[500px] p-6 mx-auto relative'>
      <form id='authForm' onSubmit={handleSubmit} className='w-full flex flex-col gap-4 p-6 rounded-md border-[1px] border-primary-light dark:border-primary-dark shadow-2xl bg-primary-light dark:bg-primary-dark '>
        {children}
      </form>
    </div>
  )
}

export default FormContainer;