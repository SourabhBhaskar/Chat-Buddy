// Imports
import React from 'react';


// User Information
function UserInfo({ children }) {
  return (
    <div className='w-full h-[80px] flex flex-shrink-0 justify-between border-b-[1px] border-l-primary-border dark:border-d-primary-border'>
      { children }
    </div>
  )
}


// Export
export default UserInfo;