import { createSlice } from '@reduxjs/toolkit';
import { navigationReducer } from './Reducers/navigation.reducer';
import { chatRoomOpenReducer } from './Reducers/chatRoom.reducer';
import { connectionProfileReducer } from './Reducers/connectionProflie.reducer';
import { isAuthenticatedReducer } from './Reducers/isAuthenticated.reducer';
import { addPopUpWindowReducer } from './Reducers/addPopUpWindow.reducer';
import { removePopUpWindowReducer } from './Reducers/removePopUpWindow.reducer';


// Initial State
const initialState = {
    navigation: "chats",
    chatRoom: window.innerWidth >= 1280,
    connectionProfile: false,
    isAuthenticated: false,
    popUpWindows: [],
}


// Slice
const GlobalSlice = createSlice({
    initialState: initialState,
    name: 'GlobalSlice',
    reducers: {
        setNavigation: navigationReducer,
        setChatRoom: chatRoomOpenReducer,
        setConnectionProfile: connectionProfileReducer,
        setIsAuthenticated: isAuthenticatedReducer,
        setAddPopUpWindow: addPopUpWindowReducer,
        setRemovePopUpWindow: removePopUpWindowReducer,
    }
})


// Export
export const {
    setNavigation,
    setChatRoom,
    setConnectionProfile,
    setIsAuthenticated,
    setAddPopUpWindow,
    setRemovePopUpWindow,
 } = GlobalSlice.actions;
export default GlobalSlice.reducer;