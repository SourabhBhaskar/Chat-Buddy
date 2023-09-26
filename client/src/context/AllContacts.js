import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";




// All contact list slice
const initialState = [...DummyContactList] ;
const AllContacts = createSlice({
    name: 'AllContacts',
    initialState: initialState,
    reducers: {
        upadteOneContactInAll: (state, action) => {
            console.log(state)
        }
    },
});

export const { upadteOneContactInAll } = AllContacts.actions;
export default AllContacts.reducer;


