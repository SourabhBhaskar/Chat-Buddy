import { createSlice } from '@reduxjs/toolkit';
import { 
    isLoadingReducer,
    isAuthenticatedReducer,
    isAddingContactReducer,
    isChatRoomOpenReducer,
    isReceiverProfileOpenReducer,
    isDarkModeOn,
 } from './booleanReducer';


// Initial State
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    isAddingContact: false,
    isChatRoomOpen: window.innerWidth >= 1280,
    isReceiverProfileOpen: false,
}


// Slice
const Boolean = createSlice({
    initialState: initialState,
    name: 'Boolean',
    reducers: {
        
        setIsLoading: isLoadingReducer,
        setIsAuthenticated: isAuthenticatedReducer,
        setIsAddingContact: isAddingContactReducer,
        setIsChatRoomOpen: isChatRoomOpenReducer,
        setIsReceiverProfileOpen: isReceiverProfileOpenReducer,
        setIsDarkModeOn : isDarkModeOn
    }
})


// Export
export const {
    setIsLoading,
    setIsAuthenticated,
    setIsAddingContact,
    setIsChatRoomOpen,
    setIsReceiverProfileOpen,
    setIsDarkModeOn
 } = Boolean.actions;
export default Boolean.reducer;