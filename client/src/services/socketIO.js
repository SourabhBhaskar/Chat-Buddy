import { io } from 'socket.io-client';




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

// Send messge to server
export function emitMessage(message, from, to) {
    console.log(message, from, to)
    socket.emit('message',message, from, to );
}