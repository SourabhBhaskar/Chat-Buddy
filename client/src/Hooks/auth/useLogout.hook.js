import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";


// useLogout hook
export function useLogout() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    const url = process.env.REACT_APP_SERVER_LOGOUT
    const options = {
      method: "GET",
      credentials: "include",
    };

    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      if (response.ok) {
        const message = await response.text();
        navigate('/login');
        dispatch(setAddPopUpWindow({ isError: false, message: message}));
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
        dispatch(setAddPopUpWindow({ isError: true, message: error.message}));
    } finally {
        setIsLoading(false)
    }
  };

  return { isLoading, submit };
}

