import { createSlice } from '@reduxjs/toolkit';
import { 
    isLoadingReducer,
    isAuthenticatedReducer,
    isAddingContactReducer,
    isChatRoomOpenReducer,
    isConnectionProfileOpenReducer,
    isDarkModeOn,
 } from './booleanReducer';


// Initial State
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    isAddingContact: false,
    isChatRoomOpen: window.innerWidth >= 1280,
    isConnectionProfileOpen: false,
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
        setIsConnectionProfileOpen: isConnectionProfileOpenReducer,
        setIsDarkModeOn : isDarkModeOn
    }
})


// Export
export const {
    setIsLoading,
    setIsAuthenticated,
    setIsAddingContact,
    setIsChatRoomOpen,
    setIsConnectionProfileOpen,
    setIsDarkModeOn
 } = Boolean.actions;
export default Boolean.reducer;