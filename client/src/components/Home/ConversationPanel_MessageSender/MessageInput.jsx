// Import
import React from 'react';


// Input
function Input({ inputRef }) {
  return (
    <input
        type="text"
        placeholder="Type a message"
        className='w-full h-[45px] px-4 rounded-md placeholder:text-l-secondary-txt-color placeholder:dark:text-d-secondary-txt-color bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color text-l-primary-txt-color dark:text-d-primary-txt-color'
        ref={inputRef}
    />
  )
}


// Export
export default React.memo(Input);


