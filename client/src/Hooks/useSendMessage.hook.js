import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setSendMessage } from "../context/Connections/Connections.slice";
import { socket } from "../socket/socket-client";


export function useSendMessage(){
    const dispatch = useDispatch();
    const from = useSelector(state => state.UserSlice).email;
    const to  = useSelector(state => state.ConnectionsSlice).currentConnection.email;

    const sendMessage = useCallback(({ message, type}) => {
        const updatedMessage = {
            id: uuidv4(),
            message: type === 'file' ? URL.createObjectURL(message) : message,
            type: type === 'file' ? message.type.split('/')[0] : type,
            from: from,
            to: to,
            status: 'send',
            time: {
                send: Date.now(),
                delivered: '',
                seen: ''
            }
        }

        dispatch(setSendMessage(updatedMessage));
        // socket.emit('message', updatedMessage);

    }, [to])

    return { sendMessage };
}