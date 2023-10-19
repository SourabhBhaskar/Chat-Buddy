import React, { useEffect } from "react";
import Loader from "../components/Common/Loader";
import useCheckAuthentication from "../services/isAuthenticated";

function Landing() {
  const isAuthenticated = useCheckAuthentication();
  useEffect(()=>{
    isAuthenticated();
  }, [])

  return (
    <>
      <Loader />
      <main className="text-white">Landing</main>
    </>
  );
}

export default Landing;
