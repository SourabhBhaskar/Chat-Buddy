import React from 'react';

function InfoSection({ children }) {
  return (
    <section className='flex-grow px-6 py-4 overflow-scroll hide-scrollbar'>
      {children}
    </section>
  )
}

export default InfoSection;