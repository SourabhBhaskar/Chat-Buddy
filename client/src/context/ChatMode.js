import { createSlice } from "@reduxjs/toolkit";


const ChatMode = createSlice({
    name: 'ChatMode',
    initialState: false,
    reducers: {
        toggleChatMode: (state, action) => {
            const updatedChatMode = action.payload;
            return updatedChatMode;
        }
    }
})


export const { toggleChatMode } = ChatMode.actions;
export default ChatMode.reducer;