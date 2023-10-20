import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProfileUpdateMessage } from '../context/Profile';


// Declaration
const URL = process.env.REACT_APP_SERVER;


// Upgrade connection to http to socket
export const socket = io(URL, {
    autoConnect: false
});


// Stabslish a connection
export function connectToSocketServer(value) {
  if (value === true) socket.connect();
  else socket.disconnect();
  console.log("Connected to socket");
}


// Send User Data to the server
export function makeSocketConnection(senderId){
  socket.emit('connection', senderId);
  console.log("Socket Connection", senderId);
}


// Send connect to the server
export function newConnection(contact) {
  socket.emit('new-connection', contact);
  console.log("Conntected", contact);
}


// Send message to server
export const useSendMessage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.ProfileSlice);
  const from = profile.email;
  const sendTo = JSON.parse(JSON.stringify(profile.chatRoomContact));
  const sendMessage = (message) => {
    const updatedMessageForClient = { message: message, from: 'sent' };
    const updatedMessageForServer = { message: message, from: 'received' };
    const sendMessageToClient = { message: updatedMessageForClient, updateMessageTo: sendTo };
    const sendMessageToServer = { message: updatedMessageForServer, from: from, sendTo: sendTo.email };
    socket.emit('message', sendMessageToServer);
    dispatch(setProfileUpdateMessage(sendMessageToClient));
    console.log(`Sent to ${sendTo.email} : ${message}`);
  }
  return { sendMessage };
}


// Receive Messages from server
export const useReceiveMessage = () => {
  const dispatch = useDispatch();
  const receiveMessage = ({ message, from }) => {
    const sendMessageToClient = { message: message, updateMessageTo: from };
    dispatch(setProfileUpdateMessage(sendMessageToClient));
    console.log(`Received from ${from.email} : ${message.message}`);
  };

  useEffect(() => {
    const handleReceiveMessage = (message) => receiveMessage(message);
    socket.on('message', handleReceiveMessage);
    return () => socket.off('message', handleReceiveMessage);
  }, []); 

  return { receiveMessage };
};


// Update User
export const useGetUpdatedUser = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleGetUpdatedUser = (data) => {
  //     console.log("HI new connection arrived", data);
  //     // dispatch(updateUser(data));
  //   }
  //   socket.on('update-user-profile', handleGetUpdatedUser);
  //   return () => socket.off('update-user-profile', handleGetUpdatedUser);
  // })
}


  



