import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";




// All contact list slice
const initialState = [...DummyContactList] ;
const RecentContacts = createSlice({
    name: 'RecentContacts',
    initialState: initialState,
    reducers: {

    }
});

export const {  } = RecentContacts.actions;
export default RecentContacts.reducer;