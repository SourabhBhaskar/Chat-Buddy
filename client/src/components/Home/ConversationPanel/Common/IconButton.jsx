// Import
import React from 'react';


// Icon Button
function IconButton({ children, onClick=()=>{} }) {
  return children && (
    <button onClick={onClick} className='text-xl text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:text-l-primary-txt-color dark:hover:text-d-primary-txt-color '>
      {children}
    </button>
  )
}


// Export
export default React.memo(IconButton);