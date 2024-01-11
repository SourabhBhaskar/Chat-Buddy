import React from 'react'

function RememberMe({ rememberMe, setRememberMe }) {

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <input type='checkbox' className='custom-checkbox' onClick={() => setRememberMe(!rememberMe)} />
      <label htmlFor='checkbox' className='text-secondry-light dark:text-secondary-dark' >Remember me</label>
    </div>
  )
}

export default RememberMe;
