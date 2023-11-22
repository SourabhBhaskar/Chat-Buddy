import { configureStore } from '@reduxjs/toolkit';
import Profile from './Profile';
import UserSlice from './User/userSlice';
import BooleanSlice from './Boolean/booleanSlice';
import StringSlice from './String/StringSlice';
import ConnectionsSlice from './ConnectionsContext/ConnectionsContext.slice';


const store = configureStore({
    reducer: {
        UserSlice: UserSlice,
        ConnectionsSlice: ConnectionsSlice,
        BooleanSlice: BooleanSlice,
        StringSlice: StringSlice,
        ProfileSlice: Profile,
    }
})


export default store;