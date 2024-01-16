import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsAuthenticated } from '../Hooks/useIsAuthenticated.hook';


function Landing() {
  useIsAuthenticated();
  return (
    <div>Landing</div>
  )
}

export default Landing