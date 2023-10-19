import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addContact: false,
    chatMode: false,
    loader: false,
    homeNavigator: 'chats'
}

const NavigateModes = createSlice({
    name: 'NavigateModes',
    initialState: initialState,
    reducers: {
        setAddContact: (state,action) => { 
            const updatedState = {
                ...state,
                addContact: action.payload
            }
            return updatedState;
        },

        setChatMode: (state, action) => {
            const updatedState = {
                ...state, 
                chatMode: action.payload,
            }
            return updatedState;
        },

        setLoader: (state, action) => {
            const updatedState = {
                ...state, 
                loader: action.payload
            }
            return updatedState;
        },

        setHomeNavigator: (state, action) => {
            console.log(action.payload)
            const updatedState = {
                ...state, 
                homeNavigator: action.payload
            }
            return updatedState
        }
    }
})


export const { setAddContact, setChatMode, setLoader, setHomeNavigator } = NavigateModes.actions;
export default NavigateModes.reducer