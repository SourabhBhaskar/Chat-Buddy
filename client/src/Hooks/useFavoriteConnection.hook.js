import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../context/GlobalContext/global.slice";
import { setFavoriteConnection } from "../context/ConnectionsContext/connections.slice";


// useAddConnection
export function useFavoriteConnection(){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const submit = async ({ connectionEmail, isFavorite }) => {
        const url = process.env.REACT_APP_SERVER_CONNECTIONS_UPDATE_FAVORITE
        const options = {
          method: "PATCH",
          body: JSON.stringify({ connectionEmail, isFavorite }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };
        
        try {
          setIsLoading(true);
          const response = await fetch(url, options);
          if (response.status === 200 || response.status === 204) {
            dispatch(setFavoriteConnection({ connectionEmail, isFavorite }));
            dispatch(setAddPopUpWindow({ isError: false, message: `Connection has been ${isFavorite ? "added to" : "removed from"} favorites` }));
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