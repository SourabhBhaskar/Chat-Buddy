import React from 'react';
import { useNavigate } from 'react-router-dom';
import { icons } from '../../../../../utils/icons.util';
import { Icon } from '@iconify/react';


function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/login')
  return (
    <button onClick={handleLogout} className='w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all text-red-500 hover:bg-l-primary-hoverBg-color dark:hover:bg-d-primary-hoverBg-color'>
        <Icon icon={icons.logout} />
        Logout
    </button>
  )
}

export default Logout