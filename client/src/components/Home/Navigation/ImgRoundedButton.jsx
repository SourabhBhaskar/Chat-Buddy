// Imports
import React from 'react';


// Imgae Rounded Button
function ImgRoundedButton({ img, onClick}) {
  return (
    <button 
        className=''
        onClick={onClick}
    >
      <img src={img} alt='img' className='w-12 aspect-square rounded-full p-[5px]' />
    </button>
  )
}


// Exports
export default ImgRoundedButton;