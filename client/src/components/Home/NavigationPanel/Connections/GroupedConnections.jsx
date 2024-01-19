// Imports
import React from 'react';


// Connections Group
function GroupedConnections({ group, children }) {
  return (
    <div className='w-auto h-auto my-4'>
        <h1 className='text-main-color font-semibold'>{group}</h1>
        <div className='w-full p-2 bg-primary-light dark:bg-primary-dark rounded-md'>
          {children}
        </div>
    </div>
  )
}


// Export
export default GroupedConnections;