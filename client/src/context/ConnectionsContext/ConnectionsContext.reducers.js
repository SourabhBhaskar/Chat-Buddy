// Imports
import { dummyContactsData } from "../DummyData";


// Initial Setup
export function initialConnectionsSetupReducer(state, action){
    const { all, favorites, recents } = action.payload.connections;
    
    // Updated all, favorites, recents
    const updated_all = all.concat(dummyContactsData.all);
    const updated_favorites = favorites.concat(dummyContactsData.favorites);
    const updated_recents = recents.concat(dummyContactsData.recents);

    // All
    const custom_all = {};
    updated_all.forEach(connection => custom_all[connection.email] = connection);
    updated_all.sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()));

    // Sorted All
    const sorted_all = {};
    updated_all.forEach((connection) => {
        const key = connection.username.slice(0, 1).toUpperCase();
        (sorted_all[key])
        ? sorted_all[key].push(connection.email)
        : sorted_all[key] = [connection.email];
    })

    // Updated state
    const updatedState = {
        ...state,
        all: custom_all,
        favorites: updated_favorites,
        recents: updated_recents,
        sortedAll: sorted_all,
    }
    
    return updatedState;
}


// Add Connection
export function addNewConnectionReducer(state, action){
    const newConnection = action.payload;

    // All
    state.all[newConnection.email] = newConnection;

    // Sorted All
    const updated_sortedAll = {};
    Object.values({ ...state.all })
        .sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()))
        .forEach((connection) => {
            const key = connection.username.slice(0, 1).toUpperCase();
            (updated_sortedAll[key])
            ? updated_sortedAll[key].push(connection.email)
            : updated_sortedAll[key] = [connection.email];
        })
    state.sortedAll = updated_sortedAll;
}


// Set Current Connection
export function currentConnectionReducer(state, action){
    const newConnection = action.payload;
    const allConnections = state.all;
    allConnections[newConnection.email].isSeen = true;
    allConnections[newConnection.email].unSeenMsgCnt = 0;
    state.currentConnection = allConnections[newConnection.email];
}


// Send Message
export function sendMessageReducer(state, action){
    const message = action.payload;
    const currentConnection = state.currentConnection;
    const allConnections = state.all;
    const recentConnections = state.recents;

    // Update Chatroom Message
    if(currentConnection.email === message.to)
        currentConnection.messages.push(message);

    // Update Connection Message
    if(allConnections[message.to])
        allConnections[message.to].messages.push(message);

    // Update Recent
    const recentIndex = recentConnections.findIndex((c) => c === message.to);
    if(recentIndex !== -1){
        const recentIndexValue = recentConnections[recentIndex];
        recentConnections.splice(recentIndex, 1);
        recentConnections.splice(0, 0, recentIndexValue);
    }      
}


// Receive Messages
export function receiveMessageReducer(state, action){
    const messages = action.payload;
    const currentConnection = state.currentConnection;
    const allConnections = state.all;
    const recentConnections = state.recents;

    messages.forEach((message) => {
        // Update Chatroom 
        if(currentConnection.email === message.from)
            currentConnection.messages.push(message);

        // Update All 
        if(allConnections[message.from]){
            allConnections[message.from].messages.push(message);
            if(currentConnection.email !== message.from){
                allConnections[message.from].isSeen = false;
                allConnections[message.from].unSeenMsgCnt += 1;
            }
        }

        // Update Recent
        const recentIndex = recentConnections.findIndex((c) => c === message.from);
        if(recentIndex !== -1){
            const recentIndexValue = recentConnections[recentIndex];
            recentConnections.splice(recentIndex, 1);
            recentConnections.splice(0, 0, recentIndexValue);
        }      
    });
}



// Update Send Message Status
export function messagesStatusReducer(state, action){
    const { messageId, from, to, status, time } = action.payload;
    const allConnections = state.all;

    // Update Message
    const updateMessage = (messageArr) => {
        const length = messageArr.length;
        for(let i=length-1; i>=0; i--){
            if(messageArr[i].id === messageId){
                messageArr[i].status = status;
                if(status === 'delivered')
                    messageArr[i].time.delivered = time;
                if(status === 'seen')
                    messageArr[i].time.seen = time;
                break;
            }
        }
    }

    // Update Current Connection 
    const currentConnection = state.currentConnection;
    if(currentConnection.email === to)
        updateMessage(currentConnection.messages);

    // Update all
    const connection = allConnections[to];
    if(connection)
        updateMessage(connection.messages);
}


