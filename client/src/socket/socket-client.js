// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useMessageStatus } from "../Hooks/useMessageStatus.hook";
import { useReceiveMessage } from "../Hooks/useReceiveMessage.hook";


// Socket
const URL = process.env.REACT_APP_SERVER;
export const socket = io(URL, { autoConnect: false, reconnection: true });


// Socket Connection
export function useSocket(){
  const { messageStatus } = useMessageStatus();
  const { receiveMessage } = useReceiveMessage();
  const { email } = useSelector(state => state.UserSlice);

  useEffect(()=>{
    socket.connect();
    socket.on('connect', () => socket.emit('connected', { email }));
    socket.on('disconnect', () => console.log("Disconnected from server"));
    socket.on('message', (message) => receiveMessage(message));
    socket.on('message/status', (status) => messageStatus(status));
    socket.on('user/status', (status) => console.log(status));
    return () => {
      socket.disconnect();
      socket.off('connect');
      socket.off('disconnect');
      socket.off('messages');
      socket.off('message/status');
      socket.off('user/status');
    }
  }, [email])
}
