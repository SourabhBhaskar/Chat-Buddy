import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formSubmitter } from "../utils/formSubmitter.util";
import { useInitialSetup } from "./useInitialSetup.hook";


// Is user authenticated
export const useIsUserAuthenticated = () => {
  const navigate = useNavigate();
  const { initialSetup } = useInitialSetup();
  const { isAuthenticated} = useSelector(state => state.GlobalSlice);

  const isUserAuthenticated = async () => {
    const { result, error } = await formSubmitter({
      url: process.env.REACT_APP_SERVER_AUTH,
      method: "GET",
      credentials: "include",
    });

    if (!error) {
      const { data, error } = result;
      if (!error) {
        initialSetup(data);
      } else {
        console.log(error);
        navigate('/')
      }
    } else {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    !isAuthenticated && isUserAuthenticated();
  }, []);
};
