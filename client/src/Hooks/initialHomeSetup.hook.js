import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../context/Boolean/booleanSlice";
import { setInitialConnectionsSetup } from "../context/ConnectionsContext/ConnectionsContext.slice";


// Initial Setup
export function useInitialHomeSetup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialHomeSetup = (data) => {
        console.log(data);
        dispatch(setIsAuthenticated(true));

        dispatch(setInitialConnectionsSetup(data));
        navigate('/home');
    }

    return { initialHomeSetup };
}