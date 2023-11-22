

// Loader
export function isLoadingReducer(state, action){
    const updatedState = {
        ...state, 
        isLoaderOn: action.payload
    }
    return updatedState;
}


// Authentication 
export function isAuthenticatedReducer(state, action){
    const updatedValue = action.payload;
    const updatedState = {
        ...state,
        isAuthenticated: updatedValue
    }
    return updatedState;
}


// Is Adding Contact ?
export function isAddingContactReducer(state, action){
    const updateAddingContact = action.payload;
    const updatedState = {
        ...state,
        isAddingContact: updateAddingContact
    }
    return updatedState;
}


// Is Chat Room Open
export function isChatRoomOpenReducer(state, action){
    const haveToOpenChatRoom = action.payload;
    const updatedState = {
        ...state,
        isChatRoomOpen: haveToOpenChatRoom
    }
    return updatedState;
}


// Receiver Profile
export function isReceiverProfileOpenReducer(state, action){
    const haveToOpenReceiverProfile = action.payload;
    const updatedState = { 
        ...state, 
        isReceiverProfileOpen: haveToOpenReceiverProfile
    };
    return updatedState;
}


// Toggle theme mode 
export function isDarkModeOn(state, action){
    const updatedState = {
        ...state,
        isDarkModeOn: !isDarkModeOn
    }

    return updatedState;
}