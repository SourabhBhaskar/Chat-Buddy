import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectToSocket, useReceiveMessageFromSocket } from "../socket/socket-client";
import { setIsAuthenticated } from "../context/Boolean/booleanSlice";
import { setInitialUserSetup } from "../context/User/userSlice";
import { setInitialConnectionsSetup } from "../context/ConnectionsContext/ConnectionsContext.slice";


// Initial Setup
export function useInitialHomeSetup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useReceiveMessageFromSocket();

    const initialHomeSetup = (user) => {
        console.log(user);
        const { 
            username,
            email,
            phone,
            password,
            profile_picture,
            status,
            description,
            last_seen,
            location,
        } = user;

        // Authentication setup
        dispatch(setIsAuthenticated(true));

        // User setup
        dispatch(setInitialUserSetup(user));

        // Connection setup
        dispatch(setInitialConnectionsSetup(user));

        // Connect to socket 
        connectToSocket({ username, email, phone, profile_picture, status, description, last_seen, location });

        // Navigate to home
        navigate('/home');
    }

    return { initialHomeSetup };
}