import { createSlice } from '@reduxjs/toolkit';
import { initialUserSetupReducer } from './reducers/initialUserSetup.reducer';
import { userBioDataBuilder } from './extraReducers/userBioData.extraReducer';


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
    },
    extraReducers: (builder) => {
        userBioDataBuilder(builder);
    }
})


// Export
export const { 
    setInitialUserSetup,
    setUpdateUser
 } = UserSlice.actions;
export default UserSlice.reducer;