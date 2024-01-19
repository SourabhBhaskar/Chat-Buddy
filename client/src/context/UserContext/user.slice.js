import { createSlice } from '@reduxjs/toolkit';
import { initialUserSetupReducer } from './reducers/initialUserSetup.reducer';
import { userBioReducer } from './reducers/userBio.reducer';


// Initial State
const initialState = {
    username: 'Sourabh Bhaskar',
    mobile_number: '7000849686',
    email: 'sourabh@gmail.com',
    password: 'LoveYou3000',
    location: 'Dubai',
    profile_picture: '',
    status: 'Available',
};


// Slice
const UserSlice = createSlice({
    initialState: initialState,
    name: 'UserSlice',
    reducers: {
        setInitialUserSetup: initialUserSetupReducer,
        setUserBio: userBioReducer
    }
})


// Export
export const { 
    setInitialUserSetup,
    setUserBio
 } = UserSlice.actions;
export default UserSlice.reducer;