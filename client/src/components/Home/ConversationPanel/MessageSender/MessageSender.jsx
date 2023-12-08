// Imports
import React from 'react';


// Message Input
function MessageInput({ children }) {
  return (
    <section className='w-full h-[80px] px-4 flex items-center flex-shrink-0 gap-8 border-t-[1px] border-l-primary-border dark:border-d-primary-border'>
      { children }
    </section>
  )
}


// Export
export default React.memo(MessageInput);