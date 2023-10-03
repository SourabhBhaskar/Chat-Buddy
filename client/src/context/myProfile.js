import { createSlice } from "@reduxjs/toolkit";



const initialState =  {
    username: "Sourabh Bhasakr", 
    email: "sourabhbhaskar71@gmail.com", 
    mobile_number: "7000849686",
    password: "71MindBlowing",
    last_seen: "online", 
    location: "Banglore",
    profile_picture:"https://picsum.photos/id/420/100/100",  
    messages: [], 
    onCurrent: false, 
    unSeenMsgCnt: 0, 
    currentContact: false, 
    seen: false
};

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