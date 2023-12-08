// Imports
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { 
  setMessageStatus,
  setReceiveMessage,
  setMessagesStatus
 } from "../context/ConnectionsContext/ConnectionsContext.slice";


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
    console.log("Send :", message)
    socket.emit('message/text', message);
  }

  return { sendMessageToSocket };
}


// Receive Message from socket
export function useReceiveMessageFromSocket(){
  const dispatch = useDispatch();
  const currentConnection = useSelector(state => state.ConnectionsSlice).currentConnection;

  useEffect(()=>{
    const handleReceiveMessage = (message) => {
      // dispatch(setReceiveMessage(messages));
    }

    socket.on('text/message', handleReceiveMessage);
    // return () => socket.off('text/message', handleReceiveMessage);
  }, [])

  useEffect(()=>{
    console.log(currentConnection.email, "HI..............")
    // if(message.from === currentConnection.email){
    //   socket
    //   .emit('message/status', { 
    //     messageId: message.id,
    //     from: message.from, 
    //     to: message.to,  
    //     status: 'seen', 
    //     time: Date.now() 
    //   });
    // }
  }, [currentConnection])

}


// Incomming messages status
export function useMessagesStatusIn(){
  const dispatch = useDispatch();

  useEffect(()=>{
    const handleMessageStatus = (status) => {
      dispatch(setMessagesStatus(status));
    }

    socket.on('message/status', handleMessageStatus);
    return () => socket.off('message/status', handleMessageStatus);
  }, [])
}


// Outgoing message status
export function useMessagesStatusOut(){
  const currentConnection = useSelector(state => state.ConnectionsSlice).currentConnection;
  
  useEffect(()=>{
    socket.emit('message/status', {})
    const handleSendStatus = (message) => {
      socket
        .emit('message/status', { 
          messageId: message.id,
          from: message.from, 
          to: message.to,  
          status: 'delivered', 
          time: Date.now() 
        });

      if(message.from === currentConnection.email){
        socket
        .emit('message/status', { 
          messageId: message.id,
          from: message.from, 
          to: message.to,  
          status: 'seen', 
          time: Date.now() 
        });
      }
    }

    socket.on('text/message', handleSendStatus);
    return () => socket.off('text/message', handleSendStatus);
  }, [currentConnection])
}