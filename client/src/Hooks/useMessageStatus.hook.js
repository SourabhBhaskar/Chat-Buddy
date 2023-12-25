import { useDispatch } from "react-redux";
import { setMessageStatus } from "../context/Connections/Connections.slice";


export function useMessageStatus(){
    const dispatch = useDispatch();
    const messageStatus = (status) => {
        dispatch(setMessageStatus(status));
    }

    return { messageStatus };
}