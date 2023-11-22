import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../Common/Theme';
import { Icon } from '@iconify/react';


function Logout() {
  const navigate = useNavigate();
  const { commonBgHover } = useTheme();
  const handleLogout = () => navigate('/login')
  return (
    <button onClick={handleLogout} className={`w-full flex items-center gap-2 py-2 rounded-md px-3 transition-all ${commonBgHover} text-red-500`}>
        <Icon icon="ri-logout-circle-r-line" />
        Logout
    </button>
  )
}

export default Logout