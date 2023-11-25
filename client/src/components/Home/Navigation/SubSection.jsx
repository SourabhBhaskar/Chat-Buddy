// Imports
import React from 'react';


// Sub Section
function SubSection({ children }) {
  return (
    <section className='w-full h-full xl:h-auto flex xl:flex-col justify-between items-center gap-2 relative'>
      {children}
    </section>
  )
}


// Exports
export default SubSection;