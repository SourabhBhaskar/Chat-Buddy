import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddPopUpWindow, setLoader } from "../../context/GlobalContext/global.slice";
import { useInitialHomeSetup } from "../useInitialHomeSetup.hook";


// useIsAuthenticated hook
export function useIsAuthenticated() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { initialHomeSetup } = useInitialHomeSetup();
  const globalSlice = useSelector((state) => state.GlobalSlice);

  const isAuthenticated = async () => {
    const url = process.env.REACT_APP_SERVER_AUTH
    const options = {
      method: "GET",
      credentials: "include",
    };

    try {
      dispatch(setLoader(true));
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        initialHomeSetup(data);
        navigate('/home');
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      navigate('/');
      dispatch(setAddPopUpWindow({ isError: true, message: error.message}));
    } finally {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    !globalSlice.isAuthenticated && isAuthenticated();
  }, [])
}

