import React, { } from 'react';


function InfoSection({ children }) {
  return (
    <section className="p-4 flex flex-col gap-2 overflow-scroll hide-scrollbar transition-all">
      {children}
    </section>
  );
}

export default InfoSection;


