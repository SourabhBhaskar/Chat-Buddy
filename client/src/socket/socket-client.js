// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";


// Socket
const URL = process.env.REACT_APP_SERVER;
const socket = io(URL, { autoConnect: false, reconnection: true });


// Socket Connection
export function useSocket(){
  const { email } = useSelector(state => state.UserSlice);
  const { isAuthenticated } = useSelector(state => state.GlobalSlice);

  useEffect(()=>{
    isAuthenticated && socket.connect();
    socket.on('connect', () => socket.emit('connected', { email }));
    socket.on('disconnect', () => console.log("Disconnected from server"));
    return () => {
      socket.disconnect();
      socket.off('connect');
      socket.off('disconnect');
    }
  }, [isAuthenticated])
}
