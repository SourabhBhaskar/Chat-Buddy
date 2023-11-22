import React from "react";
import Loader from "../components/Common/Loader";
import { useIsUserAuthenticated } from "../Hooks/isAuthenticated.hook";


function Landing() {
  useIsUserAuthenticated();
  return (
    <>
      <Loader />
      <main className="text-white">Landing</main>
    </>
  );
}

export default Landing;
