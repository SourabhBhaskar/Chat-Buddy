// Imports
import React from 'react';


// TextArea
function TextArea({ onChange }) {
  return (
    <textarea onChange={onChange} className='w-full h-full px-4 py-2 bg-transparent border-[1px] border-l-primary-border dark:border-d-primary-border focus:outline-none text-l-primary-txt-color dark:text-d-primary-txt-color'></textarea>
  )
}


// Export
export default TextArea;