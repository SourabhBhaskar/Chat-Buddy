import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../../Common/Theme';


function Name({ name }) {
  const { primaryTxt } = useTheme();

  return (
    <div className="w-full h-auto">
      <h1 className={`w-full h-auto py-1 text-[1rem] font-[600] text-center ${primaryTxt}`}>
        {name}
      </h1>
    </div>
  )
}

export default Name