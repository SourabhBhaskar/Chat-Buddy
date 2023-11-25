// Imports
import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './Profile/UserProfile';


// Navigation Panel
function NavigationPanel() {
const { navWindow } = useSelector(state => state.StringSlice);
  return (
    <section className='border-2 w-full h-full absolute bg-l-secondary-bg-color dark:bg-d-secondary-bg-color'>
      <UserProfile />
    </section>
  )
}


// Exports
export default NavigationPanel;