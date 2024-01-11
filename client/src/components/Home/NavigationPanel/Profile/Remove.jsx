// Imports
import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../utils/icons.util';


// Remove
function Remove() {
  const handleRemove = () => ''
  return (
    <button onClick={handleRemove} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all text-l-primary-txt-color dark:text-d-primary-txt-color hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color `}>
        <Icon icon={icons.delete} />
        Remove
    </button>
  )
}


// Export
export default Remove;