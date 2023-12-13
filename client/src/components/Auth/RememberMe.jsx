import React from 'react'

function RememberMe({ credential, setCredential }) {
  const handleChange = () => setCredential(!credential);
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <input type='checkbox' className='custom-checkbox' />
      <label htmlFor='checkbox' className='' onClick={handleChange} >Remember me</label>
    </div>
  )
}

export default RememberMe;
