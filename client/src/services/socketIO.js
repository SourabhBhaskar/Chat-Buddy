import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { _lastSeen, _typingStart, _typingEnd, _sendMessage, _receiveMessage } from "../context/Profile";
// import { useIsAuthenticated } from "./useIsAuthenticated";


// Initialize the URL from environment variables and create a socket instance.
const URL = process.env.REACT_APP_SERVER;
export const socket = io(URL, { autoConnect: false, reconnection: true });

// Socket Connection
export function useSocketConnection() {
  const dispatch = useDispatch();
  // const { isAuthenticated } = useIsAuthenticated();
  const { email, contacts } = useSelector((state) => state.ProfileSlice);

  const connect = async (socket) => {
    // const authentication = await isAuthenticated();
    // if(authentication) socket.connect();
  };

  const handleConnect = () => {
    socket.emit("connected", email);
    console.log("Connected to socket");
  }

  const handleDisconnect = () => {
    console.log("Disconnected to socket");
  }

  const handleConnectError = (error) => {
    console.log("Error connect to socket", error);
  }

  const handleLastSeen = (user) => {
    dispatch(_lastSeen(user));
  }
  
  const handleTyping = userId => {
    dispatch(_typingStart(userId));
    setTimeout(() => {
      dispatch(_typingEnd(userId));
    }, 1000);
  }

  useEffect(()=>{
    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('last-seen', handleLastSeen);
    socket.on('typing', handleTyping)
    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
      socket.off('last-seen', handleLastSeen);
      socket.off('typing', handleTyping);
    };
  }, [email, contacts])

  return { connect };
}


// Send message to server
export const useSendMessage = () => {
  const dispatch = useDispatch();
  // const senderEmail  = useSelector((state) => state.SenderSlice).email;
  // const receiverEmail = useSelector((state) => state.ReceiverSlice).email;

  const sendMessage = (message) => {
    // const messageToSend = { message: message, receiverId: receiverEmail };

    // // Send message to server
    // socket.emit("messages", messageToSend);

    // // Send message to client
    // dispatch(setMessages(messageToSend));
  };

  return { sendMessage };
};


// Receive Messages from server
export const useReceiveMessage = () => {
  const dispatch = useDispatch();
  const receiveMessage = ({ message, sender }) => {
    dispatch(_receiveMessage({ message, sender }));
  };

  useEffect(() => {
    socket.on('messages', receiveMessage);
    return () => socket.off('messages', receiveMessage);
  }, []);

  return { receiveMessage };
};


