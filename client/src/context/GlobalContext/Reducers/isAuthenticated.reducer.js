
// Is Authenticated
export function isAuthenticatedReducer(state, action){
    const isAuthenticated = action.payload;
    const updatedState = {
        ...state,
        isAuthenticated: isAuthenticated
    }

    return updatedState;
}