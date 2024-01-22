// Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setConnectionStatus, setReceiveMessage  } from "../context/ConnectionsContext/connections.slice";


// Socket
const URL = process.env.REACT_APP_SERVER;
export const socket = io(URL, { autoConnect: false, reconnection: true });


// Socket Connection Events
export function useSocket(){
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.UserSlice);
  const { isAuthenticated } = useSelector(state => state.GlobalSlice);

  useEffect(()=>{
    isAuthenticated && socket.connect();
    socket.on('connect', () => socket.emit('connected', { email }));
    socket.on('disconnect', () => console.log("Disconnected from server"));
    socket.on('connection-status', (status) => dispatch(setConnectionStatus(status)));
    socket.on('message', (message) => dispatch(setReceiveMessage(message)));
    return () => {
      socket.disconnect();
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connection-status');
      socket.off('message');
    }
  }, [isAuthenticated])
}


