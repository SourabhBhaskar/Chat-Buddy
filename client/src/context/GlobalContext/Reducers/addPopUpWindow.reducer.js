

export function addPopUpWindowReducer(state, action){
    const { message, isError } = action.payload;
    state.popUpWindows.push({ message, isError });
}