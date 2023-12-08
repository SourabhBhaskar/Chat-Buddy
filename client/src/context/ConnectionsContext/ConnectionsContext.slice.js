// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    initialConnectionsSetupReducer,
    currentConnectionReducer,
    sendMessageReducer,
    receiveMessageReducer,
    messagesStatusReducer,
    addNewConnectionReducer
 } from "./ConnectionsContext.reducers";



// Initial State
const initialState = {
    currentConnection: {
        username: 'Sourabh Bhaskar',
        email: 'sourabhbhaskar71@gmail.com',
        phone: '7000849686',
        profile_picture: 'https://picsum.photos/id/7/100/100',
        status: 'offline',
        last_seen: '07-07-2007',
        location: 'Bangloare',
        
        isSeen: true,
        unSeenMsgCnt: 0,
        messages: [],
    },
    all: {},
    favorites: [],
    recents: [],
}


// Slice
const ConnectionsSlice = createSlice({
    name: 'ConnectionsSlice',
    initialState: initialState,
    reducers: {
        setInitialConnectionsSetup: initialConnectionsSetupReducer,
        setCurrentConnection: currentConnectionReducer,
        setSendMessage: sendMessageReducer,
        setReceiveMessage: receiveMessageReducer,
        setMessagesStatus: messagesStatusReducer,
        setAddNewConnection: addNewConnectionReducer
    }
})


// Exports
export const {
    setInitialConnectionsSetup,
    setCurrentConnection,
    setSendMessage,
    setReceiveMessage,
    setMessagesStatus,
    setAddNewConnection
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
