import { useSelector, useDispatch } from "react-redux";
import { setUpdateMessage } from "../context/ConnectionsContext/ConnectionsContext.slice";


// Send Message
export function useSendMessage(){
    const dispatch = useDispatch();
    const { currentConnection } = useSelector(state => state.ConnectionsSlice);
    const connectionEmail = currentConnection.email;

    const sendMessage = (message) => {
        const messageToSend = { message: message, connection: connectionEmail };
        dispatch(setUpdateMessage(messageToSend));
    }

    return { sendMessage };
}