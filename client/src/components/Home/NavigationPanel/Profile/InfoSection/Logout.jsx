import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { formSubmitter } from "../../../../../utils/formSubmitter.util";


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
      const { message, error } = result;
      if (!error) {
        console.log(message);
        navigate('/login')
      } else {
        console.log("Server Error:", error);
        alert(error)
      }
    } else {
      console.log("Client Error:", error);
      alert(`Unable to update ${name}`);
    }
  }

  return (
    <button onClick={handleLogout} className='w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all text-red-500 hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color'>
        <Icon icon={icons.logout} />
        Logout
    </button>
  )
}

export default Logout