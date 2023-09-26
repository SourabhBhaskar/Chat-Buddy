import { createSlice } from "@reduxjs/toolkit";




const initialState = [];
const ChatBoxMessages = createSlice({
    name: 'ChatBoxMessages',
    initialState: initialState,
    reducers: {
        setChatBoxMessages: (state, action) => {
            return action.payload;
        },
        
        updateChatBoxMessages: (state, action) => {
            const updatedState = [ ...state, action.payload ];
            return updatedState;
        }
    }
});

export const { setChatBoxMessages, updateChatBoxMessages } = ChatBoxMessages.actions;
export default ChatBoxMessages.reducer;
