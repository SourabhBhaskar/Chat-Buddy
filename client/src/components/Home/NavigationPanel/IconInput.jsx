import React from 'react';
import { Icon } from '@iconify/react';



function IconInput({ 
  id,
  type, 
  name, 
  value,
  icon,
  placeholder, 
  onChange,
  onFocus
}){
  return (
      <div className='flex rounded-sm border-[1px] border-l-primary-border dark:border-d-primary-border'>
        <span className={`w-[45px] flex-shrink-0 flex justify-center items-center font-bold border-r-[1px] border-l-primary-border dark:border-d-primary-border ${value ? 'text-l-primary-txt-color dark:text-d-primary-txt-color' : 'text-l-secondary-txt-color dark:text-d-secondary-txt-color'}`}>
          <Icon icon={icon} />
        </span>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          className={`w-full h-[40px] bg-transparent text-[14px] px-4 text-l-primary-txt-color dark:text-d-primary-txt-color placeholder:text-l-secondary-txt-color placeholder:dark:text-d-secondary-txt-color `}
        />
      </div>
  )
}

export default IconInput;