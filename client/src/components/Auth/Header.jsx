import React from 'react'

function Header({ page, description }) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-[#7269ef] py-4">Chat-Buddy</h1>
      <h2 className="text-2xl font-semibold text-l-primary-txt-color dark:text-d-primary-txt-color">{page}</h2>
      <p className="text-center text-l-secondary-txt-color dark:text-d-secondary-txt-color">{description}</p>
    </div>
  )
}

export default Header