
export function navigationReducer(state, action){
    const navigation = action.payload;
    const updatedState = {
        ...state,
        navigation: navigation
    }

    return updatedState;
}