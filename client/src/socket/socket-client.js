// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useReceiveMessages } from "../Hooks/useReceiveMessages.hook";


// Socket
const URL = process.env.REACT_APP_SERVER;
export const socket = io(URL, { autoConnect: false, reconnection: true });


// Socket Connection
export function useSocket(){
  const { receiveMessages } = useReceiveMessages();
  const { email } = useSelector(state => state.UserSlice);

  useEffect(()=>{
    socket.connect();
    socket.on('connect', () => socket.emit('connected', { email }));
    socket.on('disconnect', () => console.log("Disconnected from server"));
    socket.on('messages', (messages) => receiveMessages(messages));
    return () => {
      socket.disconnect();
      socket.off('connect');
      socket.off('disconnect');
      socket.off('messages');
    }
  }, [email])

}
