import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setSendMessage, setMessageStatus } from "../context/Connections/Connections.slice";
import { socket } from "../socket/socket-client";
import { uploadOnCloudinary } from "../utils/cloudinary.util";


export function useSendMessage(){
    const dispatch = useDispatch();
    const user = useSelector(state => state.UserSlice);
    const currConnection  = useSelector(state => state.ConnectionsSlice).currentConnection;

    const sendMessage = useCallback(async({ message, type}) => {
        const updatedMessage = {
            id: uuidv4(),
            message: type === 'file' ? URL.createObjectURL(message) : message,
            type: type === 'file' ? message.type.split('/')[0] : type,
            from: user.email,
            to: currConnection.email,
            status: 'sending',
            time: {
                send: Date.now(),
                delivered: '',
                seen: ''
            }
        }

        
        dispatch(setSendMessage({ ...updatedMessage }));

        if(type === 'file'){
            const response = await uploadOnCloudinary(message);
            if(response){
                updatedMessage.message = response.url;
            }else{
                updatedMessage.status = 'error';
                dispatch({ ...updatedMessage });
                return ;
            }
        }

        socket.emit('message', updatedMessage, (status) => {
            dispatch(setMessageStatus({ id: updatedMessage.id, to: currConnection.email, status: status }));
        });
    }, [currConnection.email])

    return { sendMessage };
}