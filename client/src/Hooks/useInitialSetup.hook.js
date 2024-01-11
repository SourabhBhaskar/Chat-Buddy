import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../context/GlobalContext/global.slice";
import { setInitialUserSetup } from "../context/UserContext/user.slice";
import { setInitialConnectionsSetup } from "../context/ConnectionsContext/Connections.slice";
import { dummyContactsData } from "../context/DummyData";


// Initial Setup
export function useInitialSetup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Data Setup
    const initialSetup = (user) => {

        // User Setup
        dispatch(setInitialUserSetup(user));

        // User's Connection Setup
        dispatch(setInitialConnectionsSetup({ ...user, connections: dummyContactsData}));

        // Use Authentication
        dispatch(setIsAuthenticated(true));

    }

    return { initialSetup };
}