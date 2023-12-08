// Imports
import React from 'react';


// Label
function Label({ htmlFor, value }) {
  return (
    <label htmlFor={htmlFor} className="w-full py-1 font-medium text-l-primary-txt-color dark:text-d-primary-txt-color">{value}</label>
  )
}


// Export
export default Label;