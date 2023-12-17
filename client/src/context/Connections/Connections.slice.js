// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    initialConnectionsSetupReducer,
    currentConnectionReducer,
    sendMessageReducer,
    receiveMessagesReducer,
    messagesStatusReducer,
    addNewConnectionReducer,
    updateConnectionReducer
 } from "./Connections.reducers";



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
        setReceiveMessages: receiveMessagesReducer,
        setMessagesStatus: messagesStatusReducer,
        setAddNewConnection: addNewConnectionReducer,
        setUpdateConnection: updateConnectionReducer
    }
})


// Exports
export const {
    setInitialConnectionsSetup,
    setCurrentConnection,
    setSendMessage,
    setReceiveMessages,
    setMessagesStatus,
    setAddNewConnection,
    setUpdateConnection
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
