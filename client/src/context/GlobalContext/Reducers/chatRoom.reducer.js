
export function chatRoomOpenReducer(state, action){
    const chatRoom = action.payload;
    const updatedState = {
        ...state,
        chatRoom: chatRoom
    }
    
    return updatedState;
}
