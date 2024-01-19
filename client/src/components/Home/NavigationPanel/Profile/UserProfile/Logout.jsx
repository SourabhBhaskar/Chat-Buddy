import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { useLogout } from '../../../../../Hooks/auth/useLogout.hook';


function Logout() {
  const logout = useLogout();
  const handleLogout = () => {
    logout.submit();
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