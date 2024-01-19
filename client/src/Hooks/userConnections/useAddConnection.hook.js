import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { setAddConnection } from "../../context/ConnectionsContext/connections.slice";

// Initial State
const initialState = {
  connectionEmail: "",
  connectionEmailError: "",
  connectionMessage: "",
  connectionMessageError: "",
  isLoading: false,
};


// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, connectionEmail: action.payload };
    case "EMAIL_ERROR":
      return { ...state, connectionEmailError: action.payload };
    case "MESSAGE":
      return { ...state, connectionMessage: action.payload };
    case "MESSAGE_ERROR":
      return { ...state, connectionMessageError: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};


// useAddConnection
export function useAddConnection(){
    const dispatch = useDispatch();
    const [state, dispatcher] = useReducer(reducer, initialState);

    const submit = async (exit) => {
        if(!state.connectionEmail) dispatcher({ type: "EMAIL_ERROR", payload: "Enter connection's email"});
        if(!state.connectionEmail) return;

        const url = process.env.REACT_APP_SERVER_USER_CONNECTIONS_ADD
        const options = {
          method: "PUT",
          body: JSON.stringify({ connectionEmail: state.connectionEmail, connectionMessage: state.connectionMessage }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };
        
        try {
          dispatcher({ type: "IS_LOADING", payload: true });
          const response = await fetch(url, options);
          if (response.status === 201) {
            const data = await response.json();
            dispatch(setAddConnection(data));
            dispatch(setAddPopUpWindow({ isError: false, message: "Connection added successfully" }));
            exit();
          }else {
            const message = await response.text();
            throw new Error(message);
          }
        } catch (error) {
          dispatch(setAddPopUpWindow({ isError: true, message: error.message}));
        } finally {
          dispatcher({ type: "IS_LOADING", payload: false });
        }
    }

    return { submit, state, dispatcher };
}