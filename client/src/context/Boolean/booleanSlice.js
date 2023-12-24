import { createSlice } from '@reduxjs/toolkit';
import { 
    isLoadingReducer,
    isAuthenticatedReducer,
    isAddingContactReducer,
    isChatRoomOpenReducer,
    isConnectionProfileOpenReducer,
    isDarkModeOn,
    isPictureUploadingReducer,
    viewPictureReducer
 } from './booleanReducer';


// Initial State
const initialState = {
    isLoading: false,
    isAuthenticated: false,
    isAddingContact: false,
    isChatRoomOpen: window.innerWidth >= 1280,
    isConnectionProfileOpen: false,
    isPictureUploading: null,
    viewPicture: null
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
        setIsDarkModeOn : isDarkModeOn,
        setIsPictureUploading: isPictureUploadingReducer,
        setViewPicture: viewPictureReducer
    }
})


// Export
export const {
    setIsLoading,
    setIsAuthenticated,
    setIsAddingContact,
    setIsChatRoomOpen,
    setIsConnectionProfileOpen,
    setIsDarkModeOn,
    setIsPictureUploading,
    setViewPicture
 } = Boolean.actions;
export default Boolean.reducer;