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
      <label className="font-medium mb-1">{label}</label>
      <div className="flex border-[1px] border-gray-700 rounded-[4px] text-[#a6b0cf]">
        <span className={`w-[45px] flex-shrink-0 flex justify-center items-center font-bold border-r-[1px] border-gray-700 ${value && 'text-white'}`}>
          <Icon icon={icons[name]} />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleValueChange(e)}
          onFocus={() => setError('')}
          className={`w-full h-[40px] bg-transparent text-[14px] font-[500] px-4 ${value && 'text-white'}`}
        />
      </div>
      {error && <p className="text-red-600 text-sm truncate">{error}</p>}
    </div>
  )
}

export default LabeledInput;