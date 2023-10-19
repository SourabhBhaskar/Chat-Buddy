import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfile } from "../context/Profile";
import { connectToSocketServer, makeSocketConnection } from "./socketIO";



export function useHomeSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homeSetup = (data) => {
    const email = data.email; 

    // Set my profile
    dispatch(setProfile(data));

    // Connect to socket
    connectToSocketServer(true);

    // Make a socket connection
    makeSocketConnection(email);

    // Go to home
    navigate("/home");
  };

  return homeSetup;
}