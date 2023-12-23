import React from 'react'

function InfoSection({ children }) {
  return (
    <section className='flex-grow overflow-x-hidden overflow-y-scroll hide-scrollbar'>
        {children}
    </section>
  )
}

export default InfoSection