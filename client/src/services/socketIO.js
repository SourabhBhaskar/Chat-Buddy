import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';




const URL = process.env.REACT_APP_SERVER;


// Upgrade connection to http to socket
export const socket = io(URL, {
    autoConnect: false
});

// Stabslish a connection
export function socketConnection(value) {
    console.log("Connection stablished")
    if (value === true) socket.connect();
    else socket.disconnect();
}

// Send connect to the server
export function newConnection(contact) {
    console.log("Conntected", contact)
    socket.emit('new-connection', contact);
}


// Send message to server
const useEmitMessage = () => {
    // Hooks
    const myProfile = useSelector((state) => state.MyProfileSlice);
    const ChatRoomContact = useSelector((state) => state.ContactStatesSlice).chatRoomContact;
  
    // Data
    const senderId = myProfile.email;
    const receiverId = ChatRoomContact.email;

    // Emit message 
    const emitMessage = (message) => socket.emit('message', { message, senderId, receiverId });

    // Return custom hook
    return { emitMessage }
}
  



// Export as a named export
export { useEmitMessage };
  