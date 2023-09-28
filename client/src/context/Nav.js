import { createSlice } from "@reduxjs/toolkit";


const Navigate = createSlice({
    name: 'Navigate',
    initialState: 'chats',
    reducers: {
        navigate: (state, action) => {
            const updatedNavigate = action.payload;
            return updatedNavigate;
        }
    }
})


export const { navigate } = Navigate.actions;
export default Navigate.reducer;