// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    currentConnectionReducer,
    addNewConnectionReducer,
    updateConnectionReducer,
 } from "./Connections.reducers";
 import { initialConnectionsSetupReducer } from "./reducers/initialConnectionSetup.reducer";
 import { sendMessageReducer } from "./sendMessage.reducer";
 import { messageStatusReducer } from "./messageStatus.reducer";
 import { receiveMessageReducer } from "./receiveMessage.reducer";
 import { userStatusReducer } from "./userStatus.reducer";
 import { dummyContactsData } from "../DummyData";



// Temp data function
function groupAllContacts(){
    const groupedAll = {};
    for(let i in dummyContactsData.all){
        const email = dummyContactsData.all[i].email;
        const key = dummyContactsData.all[i].username.slice(0, 1).toUpperCase();
        (groupedAll[key])
        ? groupedAll[key].push(email)
        : groupedAll[key] = [email];
    }

    return groupedAll;
}

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
    groupedAll: {},
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
        setUpdateConnection: updateConnectionReducer,
        setUserStatus: userStatusReducer
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
    setUpdateConnection,
    setUserStatus
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
