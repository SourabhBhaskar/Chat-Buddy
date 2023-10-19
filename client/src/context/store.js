import { configureStore } from '@reduxjs/toolkit';
import Profile from './Profile';
import NavigateModes from './NavigateModes';


const store = configureStore({
    reducer: {
        ProfileSlice: Profile,
        NavigateModesSlice: NavigateModes,
    }
})


export default store;