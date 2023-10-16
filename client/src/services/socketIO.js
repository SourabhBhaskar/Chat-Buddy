import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  } from '../context/ContactStates';



const URL = process.env.REACT_APP_SERVER;


// Upgrade connection to http to socket
export const socket = io(URL, {
    autoConnect: false
});


// Stabslish a connection
export function socketConnection(value) {
  if (value === true) 
    socket.connect();
  else 
    socket.disconnect();

  console.log("Connection stablished");
}


// Send connect to the server
export function newConnection(contact) {
  socket.emit('new-connection', contact);
  console.log("Conntected", contact);
}


// Send message to server
const useEmitMessage = () => {
  const MyProfile = useSelector((state) => state.MyProfileSlice);
  const currContact = useSelector((state) => state.ContactStatesSlice).currContact;

  const senderId = MyProfile.email;
  const receiverId = currContact.email;
  const emitMessage = (message) => socket.emit('message', { message, senderId, receiverId });

  return { emitMessage };
}


// Receive Messages from server
export const useReceiveMessage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleReceiveMessage = (message) => {
      // console.log(message)
      // const profile = message.senderProfile;
      // const messageToSend = message.message;
      // dispatch(updateUserMessage({ profile: JSON.stringify(profile), message: messageToSend, from: 'received' }));
      // dispatch(updateChatBoxMessages({ profile: JSON.stringify(profile), message: messageToSend, from: 'received' }));
    };
    socket.on('message', handleReceiveMessage);
    return () => socket.off('message', handleReceiveMessage);
  }, []); 

  return {};
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


// Export as a named export
export { useEmitMessage };
  