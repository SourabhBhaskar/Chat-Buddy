import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { setToggleNotification } from "../../context/ConnectionsContext/connections.slice";


// useAddConnection
export function useNotifictionConnection(){
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const submit = async ({ connectionEmail, isNotificationOn }) => {
        const url = process.env.REACT_APP_SERVER_USER_CONNECTIONS_NOTIFICTION
        const options = {
          method: "PATCH",
          body: JSON.stringify({ connectionEmail, isNotificationOn }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };

        try {
          setIsLoading(true);
          const response = await fetch(url, options);
          if (response.status === 200 || response.status === 204) {
            dispatch(setToggleNotification({ connectionEmail, isNotificationOn }));
            dispatch(setAddPopUpWindow({ isError: false, message: `Notification has been turned ${isNotificationOn ? "On" : "Off"}`}));
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