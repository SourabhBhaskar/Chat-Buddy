// Import
import React from 'react';


// Info Section
function InfoSection({ children }) {
  return (
    <section className="flex flex-col flex-grow gap-2 transition-all overflow-scroll hide-scrollbar">
      {children}
    </section>
  );
}


// Export
export default React.memo(InfoSection);


