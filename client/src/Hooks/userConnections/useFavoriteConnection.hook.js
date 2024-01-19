import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { setFavoriteConnection } from "../../context/ConnectionsContext/connections.slice";


// useAddConnection
export function useFavoriteConnection(){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const submit = async ({ connectionEmail, isFavorite }) => {
        const url = process.env.REACT_APP_SERVER_USER_CONNECTIONS_FAVORITE
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
          }else {
            const message = await response.text();
            throw new Error(message);
          }
        } catch (error) {
          dispatch(setAddPopUpWindow({ isError: true, message: error.message}));
        } finally {
          setIsLoading(false);
        }
    }

    return { submit, isLoading };
}