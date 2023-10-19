import { useDispatch } from "react-redux";
import { setLoader } from "../context/NavigateModes";


// URLs
const urls = {
  isAuthenticated: process.env.REACT_APP_SERVER,
  signup: process.env.REACT_APP_SERVER_SIGNUP,
  login: process.env.REACT_APP_SERVER_LOGIN,
  addContact: process.env.REACT_APP_SERVER_ADD_CONTACT,
};


/**
 * Find the appropriate URL based on the action.
 * @param {string} action - The action to perform ('IS_AUTHENTICATED', 'SIGNUP', 'LOGIN', 'ADD_CONTACT').
 * @returns {string} The corresponding URL for the action.
 */
function findUrl(action) {
  switch (action) {
    case "IS_AUTHENTICATED":
      return urls.isAuthenticated;
    case "SIGNUP":
      return urls.signup;
    case "LOGIN":
      return urls.login;
    case "ADD_CONTACT":
      return urls.addContact;
    default:
      return "";
  }
}


/**
 * Custom hook to submit a form to the server.
 * @param {string} action - The action to perform ('IS_AUTHENTICATED', 'SIGNUP', 'LOGIN', 'ADD_CONTACT').
 * @param {boolean} cred - Credentials option for the request.
 * @param {object} data - Data to send in the request.
 * @returns {function} A function to submit the form to the server.
 */
export default function useSubmitForm(action, cred, data) {
  const dispatch = useDispatch();

  const submitForm = async () => {
    console.log("Submitted.........")
    const foundUrl = findUrl(action);
    if (foundUrl === "") return;

    const url = foundUrl;
    const method = action === "IS_AUTHENTICATED" ? "GET" : "POST";
    const headers = { "Content-Type": "application/json"};
    const body = JSON.stringify(data);
    const options = 
      method === "GET"
        ? cred
          ? { method, credentials: "include" }
          : { method }
        : cred
          ? { method, headers, body, credentials: "include"}
          : { method, headers, body };

    dispatch(setLoader(true));
    try {
      const response = await fetch(url, options);
      dispatch(setLoader(false));
      return response;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  return submitForm;
}

