import { useDispatch } from "react-redux";
// import { setReceiveMessages } from "../context/Connections/Connections.slice";


export function useReceiveMessages(){
    const dispatch = useDispatch();
    const receiveMessages = (messages) => {
        console.log(messages)
        // dispatch(setReceiveMessages(message))
    }

    return { receiveMessages };
}