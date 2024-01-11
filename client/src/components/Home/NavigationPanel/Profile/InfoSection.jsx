// Import
import React from 'react';


// Info Section
function InfoSection({ children }) {
  return (
    <section className="w-full h-auto p-4 rounded-md bg-primary-light dark:bg-primary-dark">
      {children}
    </section>
  );
}


// Export
export default React.memo(InfoSection);


