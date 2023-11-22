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



// Update Message
export function updateMessageReducer(state, action){
    const { message, connection } = action.payload;
    const currentConnection = state.currentConnection.email;
    const updatedMessage = designMessage(message, connection === currentConnection);

    // Updating Chat Room
    if(currentConnection === connection){
        state.currentConnection.messages.push(updatedMessage);

    }

    // Updating All
    const isConnectionExist = state.all[connection];
    console.log(action.payload)
}