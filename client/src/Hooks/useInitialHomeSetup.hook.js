import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../context/GlobalContext/global.slice";
import { setInitialUserSetup } from "../context/UserContext/user.slice";
import { setInitialConnectionsSetup } from "../context/ConnectionsContext/connections.slice";
import { dummyContactsData } from "../context/DummyData";


// Initial Setup
export function useInitialHomeSetup(){
    const dispatch = useDispatch();

    // Data Setup
    const initialHomeSetup = async(user) => {

        // User Setup
        dispatch(setInitialUserSetup(user));

        // User's Connection Setup
        dispatch(setInitialConnectionsSetup({ ...user, connections: {
            all: { ...user.connections.all, ...dummyContactsData.all },
            favorites: [ ...user.connections.favorites, ...dummyContactsData.favorites ],
            recents: [ ...user.connections.recents, ...dummyContactsData.recents ]
        }}));

        // Use Authentication
        dispatch(setIsAuthenticated(true));
    }

    return { initialHomeSetup };
}