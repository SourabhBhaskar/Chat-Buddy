// Imports
import React from 'react';


// Connection List
function ConnectionsList({ children }) {

  return (
    <section className='flex-grow overflow-scroll mt-4 hide-scrollbar'>
      {children}
    </section>
  );
}


// Export
export default React.memo(ConnectionsList);


