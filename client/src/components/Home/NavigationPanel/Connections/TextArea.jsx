// Imports
import React from 'react';


// TextArea
function TextArea({ label, value, onChange }) {
  return (
    <div>
      <h1 className='text-sm dtext-primary-light dark:text-primary-dark'>{label}</h1>
      <textarea value={value} onChange={onChange} className='w-full h-[60px] p-2 bg-transparent hide-scrollbar focus:outline-none border-[1px] border-primary-light dark:border-primary-dark text-secondary-light dark:text-secondary-dark'></textarea>
    </div>
  )
}


// Export
export default TextArea;