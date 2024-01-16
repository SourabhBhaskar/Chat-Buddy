import { configureStore } from '@reduxjs/toolkit';
import GlobalSlice from './GlobalContext/global.slice';
import UserSlice from './UserContext/user.slice';
import ConnectionsSlice from './ConnectionsContext/connections.slice';


const store = configureStore({
    reducer: {
        GlobalSlice: GlobalSlice,
        UserSlice: UserSlice,
        ConnectionsSlice: ConnectionsSlice,
    }
})


export default store;