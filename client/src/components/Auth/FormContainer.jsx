import React from 'react';


function FormContainer({ children, handleSubmit }) {

  return (
    <div className='w-full max-w-[500px] p-6 mx-auto font-medium text-md sm:text-sm text-l-primary-txt-color dark:text-d-primary-txt-color'>
      <form id='authForm' onSubmit={handleSubmit} className='w-full flex flex-col gap-4 p-6 rounded-md shadow-xl border-[1px] border-l-primary-bg-color dark:border-d-primary-border bg-l-primary-bg-color dark:bg-d-primary-bg-color'>
        {children}
      </form>
    </div>
  )
}

export default FormContainer