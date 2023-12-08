import React from "react";


function PictureSection({ children }) {
  return (
    <section className='w-full h-auto mx-auto pb-6 relative flex-shrink-0 border-b-[1px] border-l-primary-border dark:border-d-primary-border'>
      {children}
    </section>
  );
}

export default PictureSection;