// Imports
import React from 'react';


// Connection List
function ConnectionsList({ children }) {

  return (
    <section className='flex-grow overflow-scroll hide-scrollbar mx-4 mt-4'>
      {children}
    </section>
  );
}


// Export
export default React.memo(ConnectionsList);


