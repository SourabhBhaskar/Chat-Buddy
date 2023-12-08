// Import
import React from 'react';


// Info Section
function InfoSection({ children }) {
  return (
    <section className="p-4 flex flex-col flex-grow gap-2 transition-all overflow-scroll hide-scrollbar">
      {children}
    </section>
  );
}


// Export
export default InfoSection;


