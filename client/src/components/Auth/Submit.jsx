import React from 'react'

function Submit({ value }) {
  return (
    <button>
        <input className="w-full h-[40px] bg-[#7269ef] font-bold rounded-md hover:bg-[#7269efcc] flex-shrink-0" type="submit" value={value} />
    </button>
  )
}

export default Submit