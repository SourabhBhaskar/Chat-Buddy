import React from "react";


function PictureSection({ children }) {
  return (
    <section className='w-full h-auto flex-shrink-0 pb-4 mb-4 border-b-[1px] border-l-primary-border dark:border-d-primary-border'>
      {children}
    </section>
  );
}


export default React.memo(PictureSection);