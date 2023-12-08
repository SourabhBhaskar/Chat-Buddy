// Imports
import React from 'react';


// Connections Group
function GroupedConnections({ group, children }) {
  return (
    <div className='w-auto h-auto mb-8'>
        <h1 className='text-[#7269ef] font-medium'>{group}</h1>
        <div className='w-full p-4 bg-l-primary-bg-color dark:bg-d-primary-bg-color rounded-md'>
            {children}
        </div>
    </div>
  )
}


// Export
export default React.memo(GroupedConnections);