import { useDispatch } from "react-redux";
// import { setReceiveMessage } from "../context/Connections/Connections.slice";


export function useReceiveMessage(){
    const dispatch = useDispatch();
    const receiveMessage = (message) => {
        message.time.received = Date.now();
        // dispatch(setReceiveMessage(message));
    }

    return { receiveMessage };
}