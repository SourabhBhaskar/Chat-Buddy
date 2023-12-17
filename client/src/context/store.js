import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './User/userSlice';
import BooleanSlice from './Boolean/booleanSlice';
import StringSlice from './String/StringSlice';
import ConnectionsSlice from './Connections/Connections.slice';


const store = configureStore({
    reducer: {
        UserSlice: UserSlice,
        ConnectionsSlice: ConnectionsSlice,
        BooleanSlice: BooleanSlice,
        StringSlice: StringSlice,
    }
})


export default store;