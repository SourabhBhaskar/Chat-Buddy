import React from 'react';
import { useTheme } from '../../Common/Theme';


function AddContact() {
  const { secondaryTxt } = useTheme();
  return (
    <section className={`flex-grow flex justify-center items-center mx-4 mt-4 ${secondaryTxt}`}>
      <h1>Add contacts</h1>
    </section>  
  )
}

export default AddContact