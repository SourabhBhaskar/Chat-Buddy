import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../context/GlobalContext/global.slice";
import { setInitialUserSetup } from "../context/UserContext/user.slice";
import { setInitialConnectionsSetup } from "../context/ConnectionsContext/connections.slice";


// Initial Setup
export function useInitialHomeSetup(){
    const dispatch = useDispatch();

    // Data Setup
    const initialHomeSetup = async(user) => {
        console.log(user)

        // User Setup
        dispatch(setInitialUserSetup(user));

        // User's Connection Setup
        dispatch(setInitialConnectionsSetup([ ...user.connections ]));

        // Use Authentication
        dispatch(setIsAuthenticated(true));
    }

    return { initialHomeSetup };
}