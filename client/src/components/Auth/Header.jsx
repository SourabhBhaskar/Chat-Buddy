import React from 'react'

function Header({ page, description }) {
  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold py-4 mx-auto text-main-color">ChatBuddy</h1>
      <h2 className="text-center text-2xl font-semibold text-primary-light dark:text-primary-dark">{page}</h2>
      <p className="text-center text-secondary-light dark:text-secondary-dark">{description}</p>
    </div>
  )
}

export default Header;