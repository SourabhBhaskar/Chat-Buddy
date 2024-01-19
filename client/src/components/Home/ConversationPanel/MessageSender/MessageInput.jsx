// Import
import React from 'react';


// Input
function Input({ inputRef }) {
  return (
    <input
        type="text"
        placeholder="Type a message"
        className='w-full h-full rounded-md px-4 bg-primary-light-hover dark:bg-primary-dark-hover text-primary-light dark:text-primary-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark'
        ref={inputRef}
    />
  )
}


// Export
export default React.memo(Input);


