import { createSlice } from "@reduxjs/toolkit";



const initialState = { };
const MyProfile = createSlice({
    name: 'MyProfile',
    initialState: initialState,
    reducers: {
        setMyProfile: (state, action) => {
            const updatedState = { ...action.payload };
            console.log("Updated", updatedState);
            return updatedState;
        }
    }
});

export const { setMyProfile } = MyProfile.actions;
export default MyProfile.reducer;