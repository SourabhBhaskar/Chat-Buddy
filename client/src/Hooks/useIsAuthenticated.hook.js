import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { formSubmitter } from "../utils/formSubmitter.util";
import { setIsLoading } from "../context/Boolean/booleanSlice";
import { useInitialSetup} from "./useInitialSetup.hook";


// Is user authenticated
export const useIsUserAuthenticated = () => {
    const dispatch = useDispatch();
    const { initialSetup } = useInitialSetup();

    const isUserAuthenticated = async () => {
        const { result, error } = await formSubmitter({
            url:  process.env.REACT_APP_SERVER_AUTH,
            method: "GET", 
            loaderCallback: (isLoading) => dispatch(setIsLoading(isLoading))
        })

        if(!error){
            const { data, message, error } = result;
            if(!error){
                initialSetup(data);
                console.log(message);
            }else{
                console.log("Server Error:", error);
            }
        }else{
            console.log("Client Error:", error);
        }
    }

    useEffect(()=>{
        isUserAuthenticated();
    }, [])
}