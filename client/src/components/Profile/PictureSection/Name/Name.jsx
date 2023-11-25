import React from 'react';

function Name({ name }) {

  return (
    <div className="w-full h-auto border-2">
      <h1 className='w-full h-auto py-1 text-[1rem] font-[600] text-center text-l-primary-txt-color dark:text-d-primary-txt-color'>
        {name}
      </h1>
    </div>
  )
}

export default Name