import React from 'react'

function Header({ page, description }) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-[#7269ef] py-4">Chat-Buddy</h1>
      <h2 className="text-2xl font-semibold">{page}</h2>
      <p className="text-[#abb4d2] text-center">{description}</p>
    </div>
  )
}

export default Header