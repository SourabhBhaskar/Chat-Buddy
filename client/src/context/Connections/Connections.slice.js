// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    initialConnectionsSetupReducer,
    currentConnectionReducer,
    addNewConnectionReducer,
    updateConnectionReducer,
 } from "./Connections.reducers";
 import { sendMessageReducer } from "./sendMessage.reducer";
 import { messageStatusReducer } from "./messageStatus.reducer";
 import { receiveMessageReducer } from "./receiveMessage.reducer";



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
        setMessageStatus: messageStatusReducer,
        setAddNewConnection: addNewConnectionReducer,
        setUpdateConnection: updateConnectionReducer
    }
})


// Exports
export const {
    setInitialConnectionsSetup,
    setCurrentConnection,
    setSendMessage,
    setReceiveMessage,
    setMessageStatus,
    setAddNewConnection,
    setUpdateConnection
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
