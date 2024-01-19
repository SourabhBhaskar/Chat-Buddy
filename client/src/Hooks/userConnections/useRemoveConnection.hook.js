import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { setRemoveConnection } from "../../context/ConnectionsContext/connections.slice";



// useAddConnection
export function useRemoveConnection(){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const submit = async (connectionEmail) => {
        if(!connectionEmail) throw new Error("Provide connection's email to delete");
        if(!connectionEmail) return;

        const url = process.env.REACT_APP_SERVER_USER_CONNECTIONS_REMOVE
        const options = {
          method: "DELETE",
          body: JSON.stringify(connectionEmail),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };
        
        try {
          setIsLoading(true);
          const response = await fetch(url, options);
          if (response.status === 204) {
            dispatch(setRemoveConnection(connectionEmail));
            dispatch(setAddPopUpWindow({ isError: false, message: "Connection removed successfully" }));
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