// Imports
import { dummyContactsData } from "../DummyData";


// Initial Setup
export function initialConnectionsSetupReducer(state, action){
    const { all, favorites, recents } = action.payload.connections;

    // Updated all, favorites, recents
    const updated_all = { ...all, ...dummyContactsData.all };
    const updated_favorites = favorites.concat(dummyContactsData.favorites);
    const updated_recents = recents.concat(dummyContactsData.recents);

    // Sorted All
    const groupedAll = {};
    for(let i in updated_all){
        const email = updated_all[i].email;
        const key = updated_all[i].username.slice(0, 1).toUpperCase();
        (groupedAll[key])
        ? groupedAll[key].push(email)
        : groupedAll[key] = [email];
    }

    // Updated state
    const updatedState = {
        ...state,
        all: updated_all,
        favorites: updated_favorites,
        recents: updated_recents,
        groupedAll: groupedAll,
    }
    
    return updatedState;
}

// Set Current Connection
export function currentConnectionReducer(state, action){
    const connectionId = action.payload.email;
    const connection = state.all[connectionId];
    connection.isSeen = true;
    connection.unSeenMsgCnt = 0;
    state.currentConnection = { ...state.currentConnection, ...connection  };
}


// Add Connection
export function addNewConnectionReducer(state, action){
    const newConnection = action.payload;

    // All
    state.all[newConnection.email] = newConnection;

    // Sorted All
    const updated_groupedAll = {};
    Object.values({ ...state.all })
        .sort((a, b) => a.username.toLowerCase().localeCompare(b.username.toLowerCase()))
        .forEach((connection) => {
            const key = connection.username.slice(0, 1).toUpperCase();
            (updated_groupedAll[key])
            ? updated_groupedAll[key].push(connection.email)
            : updated_groupedAll[key] = [connection.email];
        })
    state.groupedAll = updated_groupedAll;
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
    }else if(allConnections[message.to]){
        state.recents = [message.to, ...state.recents ];
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


// Update Connection
export function updateConnectionReducer(state, action){
    const { name, value } = action.payload || {};
    const connection = state.currentConnection;

    switch(name){
        case "Notifications":
            connection.notifications = !value;
            state.all[connection.email].notifications = !value;
            break;
        case "Block":
            connection.block = !value;
            state.all[connection.email].block = !value;
    }
}