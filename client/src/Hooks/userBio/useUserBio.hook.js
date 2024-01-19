import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { setUserBio } from "../../context/UserContext/user.slice";


// useAddConnection
export function useUserBio(){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const submit = async (data) => {
        const url = process.env.REACT_APP_SERVER_USER_BIO_UPDATE
        const options = {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };

        try {
          setIsLoading(true);
          const response = await fetch(url, options);
          if (response.status === 200 || response.status === 204) {
            dispatch(setUserBio(data));
          } else if (response.status >= 400 && response.status < 500) {
            const clientError = await response.text();
            throw new Error(clientError);
          } else if (response.status >= 500 && response.status < 600) {
            throw new Error("Internal Server Error");
          } else {
            throw new Error("Unexpected error");
          }
        } catch (error) {
          dispatch(setAddPopUpWindow({ isError: true, message: error.message }));
        } finally {
          setIsLoading(false);
        }
    }

    return { submit, isLoading };
}