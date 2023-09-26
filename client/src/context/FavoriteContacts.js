import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";




// All contact list slice
const initialState = [...DummyContactList] ;
const FavoriteContacts = createSlice({
    name: 'FavoriteContacts',
    initialState: initialState,
    reducers: {

    }
});

export const {  } = FavoriteContacts.actions;
export default FavoriteContacts.reducer;

