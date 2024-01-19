import React from 'react';
import { useIsAuthenticated } from '../Hooks/auth/useIsAuthenticated.hook';


function Landing() {
  useIsAuthenticated();
  return (
    <div>Landing</div>
  )
}

export default Landing