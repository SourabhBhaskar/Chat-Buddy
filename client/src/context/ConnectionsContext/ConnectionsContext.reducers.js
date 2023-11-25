// Imports
import { designMessage } from "../../utils/designMessage.util";
import { dummyContactsData } from "../DummyData";


// Initial Setup
export function initialConnectionsSetupReducer(state, action){
    const { all, favorites, recents } = action.payload.connections;
    const updatedAll = [ ...all, ...dummyContactsData.all ];
    const updatedFavorite = [ ...favorites, ...dummyContactsData.favorites ];
    const updatedRecent = [ ...recents, ...dummyContactsData.recents ];

    const allMap = {};
    updatedAll.forEach((connection) => {
        allMap[connection.email] = connection;
    });

    const updatedState = {
        ...state,
        all: allMap ,
        favorites: updatedFavorite,
        recents: updatedRecent
    }
    
    return updatedState;
}



// Set Current Connection
export function currentConnectionReducer(state, action){
    const connection = action.payload;
    const updatedState = {
        ...state,
        currentConnection: connection
    }
    return updatedState;
}


// Send Message
export function updateMessageReducer(state, action){
    const messages = action.payload;
    messages.forEach(({ message, from, to }) => {
        const updatedMessage = designMessage(message, to ? 'user' : 'connection');
        const connectionEmail = state.currentConnection.email;
        const messageUpdateTo = from || to;

        // Update Chatroom Message
        if(connectionEmail === messageUpdateTo)
        state.currentConnection.messages.push(updatedMessage);

        // Update Connection Message
        state.all[messageUpdateTo] && state.all[messageUpdateTo].messages.push(updatedMessage);

        // Update Recent
        const recentIndex = state.recents.findIndex((c) => c === messageUpdateTo);
        if(recentIndex !== -1){
            const recentIndexValue = state.recents[recentIndex];
            state.recents.splice(recentIndex, 1);
            state.recents.splice(0, 0, recentIndexValue);
        }      
    });
}


