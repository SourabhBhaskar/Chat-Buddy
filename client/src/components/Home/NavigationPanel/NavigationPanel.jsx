// Imports
import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './Profile/UserProfile';
import Chats from './Chats/Chats';
import Connections from './Connections/Connections';


// Navigation Panel
function NavigationPanel() {
const { navWindow } = useSelector(state => state.StringSlice);
  return (
    <div className='w-full h-full bg-l-secondary-bg-color dark:bg-d-secondary-bg-color'>
      { navWindow === 'user-profile' && <UserProfile /> }
      { navWindow === 'chats' && <Chats />}
      { navWindow === 'connections' && <Connections /> }
    </div>
  )
}


// Exports
export default NavigationPanel;