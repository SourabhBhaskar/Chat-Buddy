import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddPopUpWindow } from "../../context/GlobalContext/global.slice";
import { useInitialHomeSetup } from "../useInitialHomeSetup.hook";


// Initial State
const initialState = {
  username: "",
  email: "",
  password: "",
  rememberMe: false,
  usernameError: "",
  emailError: "",
  passwordError: "",
  isLoading: "",
};


// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "USERNAME_ERROR":
      return { ...state, usernameError: action.payload };
    case "EMAIL_ERROR":
      return { ...state, emailError: action.payload };
    case "PASSWORD_ERROR":
      return { ...state, passwordError: action.payload };
    case "REMEMBER_ME":
      return { ...state, rememberMe: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};


// useSignup hook
export function useSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { initialHomeSetup } = useInitialHomeSetup();
  const [state, dispatcher] = useReducer(reducer, initialState);

  const submit = async () => {
    if (!state.username)
      dispatcher({ type: "USERNAME_ERROR", payload: "Enter your username" });
    if (!state.email)
      dispatcher({ type: "EMAIL_ERROR", payload: "Enter your email" });
    if (!state.password)
      dispatcher({ type: "PASSWORD_ERROR", payload: "Enter your password" });
    if (!state.username || !state.email || !state.password) return;

    const url = process.env.REACT_APP_SERVER_SIGNUP
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        username: state.username,
        email: state.email,
        password: state.password,
      }),
    };

    try {
      dispatcher({ type: "IS_LOADING", payload: true });
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        initialHomeSetup(data);
        navigate('/home');
      } else if (response.status >= 400 && response.status < 500) {
        const clientError = await response.text();
        if (clientError.toLowerCase().includes("username"))
          dispatcher({ type: "USERNAME_ERROR", payload: clientError });
        else if (clientError.toLowerCase().includes("email"))
          dispatcher({ type: "EMAIL_ERROR", payload: clientError });
        else if (clientError.toLowerCase().includes("password"))
          dispatcher({ type: "PASSWORD_ERROR", payload: clientError });
        else throw new Error("Unexpected error");
      } else if (response.status >= 500 && response.status < 600) {
        throw new Error("Internal Server Error");
      } else {
        throw new Error("Unexpected error");
      }
    } catch (error) {
      dispatch(setAddPopUpWindow({ isError: true, message: "Internal Server Error" }));
    } finally {
      dispatcher({ type: "IS_LOADING", payload: false });
    }
  };

  return { submit, state, dispatcher };
}
