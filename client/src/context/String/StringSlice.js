// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    themeMode,
    navWindow,
    viewPictureReducer
 } from "./StringReducer";


// Initial State
const initialState = {
    navWindow: 'chats',
    themeMode: {
        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        light: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches,
        systemDefault: true
    },
    viewPicture: ''
};


// Slice
const StringSlice = createSlice({
    name: 'StringSlice',
    initialState: initialState,
    reducers: {
        setThemeMode: themeMode,
        setNavWindow: navWindow,
        setViewPicture: viewPictureReducer
    }
});


// Exports
export const { 
    setThemeMode,
    setNavWindow,
    setViewPicture,
} = StringSlice.actions;
export default StringSlice.reducer;