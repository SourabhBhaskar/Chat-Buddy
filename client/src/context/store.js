import { configureStore } from '@reduxjs/toolkit';
import Loader from './Loader';
import MyProfile from './MyProfile';
import Navigate from './Nav';
import ChatMode from './ChatMode';
import ContactStates from './ContactStates';




const store = configureStore({
    reducer: {
        LoaderSlice: Loader,
        MyProfileSlice: MyProfile,
        NavigateSlice: Navigate,
        ChatModeSlice: ChatMode,
        ContactStatesSlice: ContactStates
    }
})


export default store;