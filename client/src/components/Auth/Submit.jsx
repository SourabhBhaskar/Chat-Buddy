import React from 'react'

function Submit({ value }) {
  return (
    <button className='w-full'>
        <input className="w-full h-[45px] text-lg text-d-primary-txt-color bg-[#7269ef] font-bold rounded-md hover:bg-[#7269efcc] flex-shrink-0 text" type="submit" value={value} />
    </button>
  )
}

export default Submit