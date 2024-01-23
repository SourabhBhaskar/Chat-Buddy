// Imports
import { createSlice } from "@reduxjs/toolkit";
import { initialConnectionsSetupReducer } from "./reducers/initialConnectionSetup.reducer";
import { addConnectionReducer } from "./reducers/addConnection.reducer";
import { removeConnectionReducer } from "./reducers/removeConnection.reducer";
import { favoriteConnectionReducer } from "./reducers/favoriteConnection.reducer";
import { blockConnectionReducer } from "./reducers/blockConnection.reducer";
import { currentConnectionReducer } from "./reducers/currentConnection.reducer";
import { toggleNotificationReducer } from "./reducers/toggelNotification.reducer";
import { sendMessageReducer } from "./reducers/sendMessage.reducer";
import { receiveMessageReducer } from "./reducers/receiveMessage.reducer";
import { connectionStatusReducer } from "./reducers/connectionStatus.reducer";


// Initial State
const initialState = {
    currentConnection: '',
    all: [],
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
        setBlockConnection: blockConnectionReducer,
        setCurrentConnection: currentConnectionReducer,
        setToggleNotification: toggleNotificationReducer,

        setConnectionStatus: connectionStatusReducer,
        setSendMessage: sendMessageReducer,
        setReceiveMessage: receiveMessageReducer,
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
    setToggleNotification,

    setConnectionStatus,
    setSendMessage,
    setReceiveMessage,
} = ConnectionsSlice.actions;
export default ConnectionsSlice.reducer;
