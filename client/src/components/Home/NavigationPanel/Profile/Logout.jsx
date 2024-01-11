import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { formSubmitter } from "../../../../utils/formSubmitter.util";


function Logout() {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = async({ name, value }) => {
    const options = {
      url: process.env.REACT_APP_SERVER_LOGOUT,
      method: "GET",
      credentials: true,
    }

    const { result, error } = await formSubmitter({ ...options });
    
    if (!error) {
      const { error } = result;
      if (!error) {
        navigate('/login')
      } else {
        console.log(error);
        alert(`Unable to logout ${name}`);
      }
    } else {
      console.log(error)
      alert(`Unable to logout ${name}`);
    }
  }

  return (
    <button onClick={handleLogout} className='w-full flex items-center gap-2 rounded-md transition-all'>
      <div className='w-full text-red-600 flex items-center gap-2 p-2 rounded-md hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover'>
        <Icon icon={icons.logout} />
        <span>Logout</span>
      </div>
    </button>
  )
}

export default Logout