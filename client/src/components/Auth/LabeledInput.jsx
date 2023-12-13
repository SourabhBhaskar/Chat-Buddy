import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../utils/icons.util';



function LabeledInput({ 
  label, 
  type, 
  name, 
  placeholder, 
  value, 
  handleValueChange, 
  error, 
  setError 
}){
  return (
    <div className="flex flex-col">
      <label className="">{label}</label>
      <div className="flex relative border-[1px] border-d-primary-bg-color dark:border-l-primary-border rounded-[4px] text-[#a6b0cf]">
        <span className={`w-[45px] flex-shrink-0 flex justify-center items-center font-bold border-r-[1px] border-d-primary-bg-color dark:border-l-primary-border ${value && 'text-l-primary-txt-color dark:text-d-primary-txt-color' }`}>
          <Icon icon={icons[name]} />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleValueChange(e)}
          onFocus={() => setError('')}
          className={`w-full h-[40px] bg-transparent text-[14px] font-[500] px-4 text-l-primary-txt-color dark:text-d-primary-txt-color`}
        />
        {error && <p className='w-full text-xs text-red-600 truncate absolute top-[40px] pr-8'>{error}</p>}
      </div>
    </div>
  )
}

export default LabeledInput;