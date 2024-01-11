

export function connectionProfileReducer(state, action){
    const connectionProfile = action.payload;
    const updatedState = { 
        ...state, 
        connectionProfile: connectionProfile
    };
    
    return updatedState;
}