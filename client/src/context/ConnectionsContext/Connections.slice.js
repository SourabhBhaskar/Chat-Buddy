// Imports
import { createSlice } from "@reduxjs/toolkit";
import { initialConnectionsSetupReducer } from "./reducers/initialConnectionSetup.reducer";
import { addConnectionReducer } from "./reducers/addConnection.reducer";
import { removeConnectionReducer } from "./reducers/removeConnection.reducer";
import { favoriteConnectionReducer } from "./reducers/favoriteConnection.reducer";
import { blockConnectionReducer } from "./reducers/blockConnection.reducer";


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
        setAddConnection: addConnectionReducer,
        setRemoveConnection: removeConnectionReducer,
        setFavoriteConnection: favoriteConnectionReducer,
        setBlockConnection: blockConnectionReducer
    }
})


// Exports
export const {
    setInitialConnectionsSetup,
    setAddConnection,
    setRemoveConnection,
    setFavoriteConnection,
    setBlockConnection,

    setCurrentConnection,
    setSendMessage,
    setReceiveMessage,
    setMessageStatus,
    setUpdateConnection,
    setUserStatus
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
