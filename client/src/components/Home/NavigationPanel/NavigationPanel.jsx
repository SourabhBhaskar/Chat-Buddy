// Imports
import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './Profile/UserProfile';
import Chats from './Chats/Chats';
import Connections from './Connections/Connections';
import Settings from './Settings/Settings';


// Navigation Panel
function NavigationPanel() {
const { navWindow } = useSelector(state => state.StringSlice);
  return (
    <div className='w-full h-full px-4 bg-l-secondary-bg-color dark:bg-d-secondary-bg-color shadow-md border-x-[1px] border-l-primary-border dark:border-d-primary-border'>
      { navWindow === 'user-profile' && <UserProfile /> }
      { navWindow === 'chats' && <Chats />}
      { navWindow === 'connections' && <Connections /> }
      { navWindow === 'settings' && <Settings />}
    </div>
  )
}


// Exports
export default NavigationPanel;