import { createSlice } from "@reduxjs/toolkit";
import { upadteOneContactInAll } from './AllContacts';



const initialState = { };
const ChatRoomContact = createSlice({
    name: 'ChatRoomContact',
    initialState: initialState,
    reducers: {
        Change: (state, action) => {
            const updatedState = { ...action.payload };
            console.log("Previous", state);
            console.log("Updated", updatedState);
            return updatedState;
        }
    }
});

export const { Change } = ChatRoomContact.actions;
export default ChatRoomContact.reducer;

