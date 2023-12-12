import React from 'react';


function Profile({ children, padding }) {
  return (
    <div className={`w-full h-full flex flex-col relative bg-l-secondary-bg-color dark:bg-d-secondary-bg-color ${padding && 'px-4'}`}>
      {children}
    </div>
  )
}


export default Profile;