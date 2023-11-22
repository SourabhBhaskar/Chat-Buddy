// Imports
import { createSlice } from "@reduxjs/toolkit";
import { 
    themeMode,
    navWindow
 } from "./StringReducer";


// Initial State
const initialState = {
    navWindow: 'chats',
    themeMode: {
        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        light: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches,
        systemDefault: true
    }
};


// Slice
const StringSlice = createSlice({
    name: 'StringSlice',
    initialState: initialState,
    reducers: {
        setThemeMode: themeMode,
        setNavWindow: navWindow
    }
});


// Exports
export const { 
    setThemeMode,
    setNavWindow
} = StringSlice.actions;
export default StringSlice.reducer;