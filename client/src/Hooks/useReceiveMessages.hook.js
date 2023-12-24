import { useDispatch } from "react-redux";
import { setReceiveMessages } from "../context/Connections/Connections.slice";


export function useReceiveMessages(){
    const dispatch = useDispatch();
    const receiveMessages = (messages) => {
        dispatch(setReceiveMessages(messages));
    }

    return { receiveMessages };
}