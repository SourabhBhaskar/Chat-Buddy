import { createSlice } from '@reduxjs/toolkit';
import { navigationReducer } from './Reducers/navigation.reducer';
import { chatRoomOpenReducer } from './Reducers/chatRoom.reducer';
import { connectionProfileReducer } from './Reducers/connectionProflie.reducer';
import { isAuthenticatedReducer } from './Reducers/isAuthenticated.reducer';


// Initial State
const initialState = {
    navigation: "chats",
    chatRoom: window.innerWidth >= 1280,
    connectionProfile: false,
    isAuthenticated: false,
}


// Slice
const Boolean = createSlice({
    initialState: initialState,
    name: 'GlobalSlice',
    reducers: {
        setNavigation: navigationReducer,
        setChatRoom: chatRoomOpenReducer,
        setConnectionProfile: connectionProfileReducer,
        setIsAuthenticated: isAuthenticatedReducer
    }
})


// Export
export const {
    setNavigation,
    setChatRoom,
    setConnectionProfile,
    setIsAuthenticated
 } = Boolean.actions;
export default Boolean.reducer;