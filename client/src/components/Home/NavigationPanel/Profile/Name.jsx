import React from 'react';

function Name({ name }) {

  return (
    <h1 className='py-1 text-[1rem] font-[600] text-center text-primary-light dark:text-primary-dark'>
      {name}
    </h1>
  )
}

export default Name