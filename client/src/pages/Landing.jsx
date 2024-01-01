import React from "react";
import Loader from "../components/Common/Loader";
import { useIsUserAuthenticated } from "../Hooks/useIsAuthenticated.hook";


function Landing() {
  useIsUserAuthenticated();
  return (
    <div>Landing</div>
  );
}

export default Landing;
