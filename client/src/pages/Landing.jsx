import React from 'react';
import { useIsUserAuthenticated } from '../Hooks/useIsAuthenticated.hook';


function Landing() {
  useIsUserAuthenticated();
  return (
    <div>Landing</div>
  )
}

export default Landing