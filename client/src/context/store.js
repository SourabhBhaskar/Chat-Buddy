import { configureStore } from '@reduxjs/toolkit';
import AllContacts from './AllContacts';
import FavoriteContacts from './FavoriteContacts';
import RecentContacts from './RecentContacts';
import ChatRoomContact from './ChatRoomContact';
import ChatBoxMessages from './ChatBoxMessages';




const store = configureStore({
    reducer: {
        AllContactsSlice: AllContacts,
        FavoriteContactsSlice: FavoriteContacts,
        RecentContactsSlice: RecentContacts,
        ChatRoomContactSlice: ChatRoomContact,
        ChatBoxMessagesSlice: ChatBoxMessages
    }
})


export default store;