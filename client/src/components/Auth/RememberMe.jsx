import React from 'react'

function RememberMe({ credential, setCredential }) {
  const handleChange = () => setCredential(!credential);
  return (
    <div className="flex items-center space-x-2 cursor-pointer mb-4">
      <input type='checkbox' className='custom-checkbox' />
      <label htmlFor='checkbox' className='custom-label' onClick={handleChange} >Remember me</label>
    </div>
  )
}

export default RememberMe;
