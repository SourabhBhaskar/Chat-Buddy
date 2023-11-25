// Imports
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { setUpdateMessage } from "../context/ConnectionsContext/ConnectionsContext.slice";


// Declarations
const URL = process.env.REACT_APP_SERVER;
const socket = io(URL, { autoConnect: false, reconnection: true });


// Connect to socket
export function connectToSocket(user) {
    socket.connect();
    socket.emit("connected", user);
}


// Send Message to socket
export function useSendMessageToSocket(){

  const sendMessageToSocket = (message) => {
    socket.emit('message/text', message);
  }

  return { sendMessageToSocket };
}


// Receive Message from socket
export function useReceiveMessageFromSocket(){
  const dispatch = useDispatch();

  useEffect(()=>{
    const handleReceiveMessages = (messages) => {
      dispatch(setUpdateMessage(messages))
    }
    socket.on('text/message', handleReceiveMessages);
  }, [])
}
