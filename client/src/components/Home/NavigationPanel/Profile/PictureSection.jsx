import React from "react";


function PictureSection({ children }) {
  return (
    <section className='w-full h-auto flex flex-col flex-shrink-0 pb-4 mb-4 border-b-[1px] border-primary-light dark:border-primary-dark'>
      {children}
    </section>
  );
}


export default PictureSection;