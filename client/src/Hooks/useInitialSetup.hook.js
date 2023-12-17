import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../context/Boolean/booleanSlice";
import { setInitialUserSetup } from "../context/User/userSlice";
import { setInitialConnectionsSetup } from "../context/Connections/Connections.slice";


// Initial Setup
export function useInitialSetup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Data Setup
    const initialSetup = (user) => {
        
        // Use Authentication
        dispatch(setIsAuthenticated(true));

        // User Setup
        dispatch(setInitialUserSetup(user));

        // User's Connection Setup
        dispatch(setInitialConnectionsSetup(user));

        // Home Navigate
        navigate('/home');
    }

    return { initialSetup };
}