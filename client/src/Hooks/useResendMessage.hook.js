import { useDispatch } from "react-redux";
import { setMessageStatus } from "../context/Connections/Connections.slice";
import { uploadOnCloudinary } from "../utils/cloudinary.util";
import { socket } from "../socket/socket-client";


export function useResendMessage(){
    const dispatch = useDispatch();
    const resendMessage = async (message) => {
        const messageType = () =>
        typeof message !== "string" ? message.type.split("/")[0] : "text";
        
        dispatch(setMessageStatus({ id: message.id, to: message.to, status: 'sending'}));
        if (messageType() !== "text") {
          const result = await uploadOnCloudinary(message);
          if (result){
            message.message = result.url;
            dispatch(setMessageStatus({ id: message.id, to: message.to, status: 'error' }));
          }else{
            message.status = "error";
            dispatch(setMessageStatus({ id: message.id, to: message.to, status: 'error' }));
            return ;
          }
        }
        socket.emit("message", message);
    }

    return { resendMessage };
}