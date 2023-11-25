// Import
import React from 'react';
import { Icon } from '@iconify/react';


// Icon Button
function IconButton({ icon, isSelected, onClick }) {
  return (
    <button
        onClick={onClick}
        className={`xl:w-full h-full aspect-square flex justify-center items-center rounded-xl transition duration-300 text-[1.4rem] text-l-secondary-txt-color dark:text-d-secondary-txt-color hover:bg-l-primary-hoverBg-color hover:text-l-primary-txt-color dark:hover:bg-d-primary-hoverBg-color dark:hover:text-d-primary-txt-color  ${
        isSelected && 'bg-l-primary-hoverBg-color dark:bg-d-primary-hoverBg-color'
    }`}>
      <Icon icon={icon} className={`${isSelected && 'text-[#7269ef]'}`} />
    </button>
  )
}


// Export
export default IconButton;