import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chatRoom: window.innerWidth >= 1280,
    receiverProfile: false,
    mainNavigator: 'chats',
    addContact: false,
    loader: false,
    themeMode: {
        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        light: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches,
        systemDefault: true
    }
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

        _themeMode: (state, action) => {
            const theme = action.payload;
            console.log(theme)
            if(theme !== 'dark' && theme !== 'light' && theme !== 'system-default')
                return state ;

            if(theme === 'system-default')
                return {
                    ...state,
                    themeMode: {
                        dark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
                        light: window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches,
                        systemDefault: true
                    }
                }
            else 
                return {
                ...state, 
                themeMode: {
                    dark: theme === 'dark' ? true : false,
                    light: theme === 'light' ? true : false,
                    systemDefault: theme === 'system-default' ? true : false
                }    
            }
        },
        setChatRoom: (state, action) => {
            console.log(action.payload)
            const haveToOpenChat = action.payload;
            const updatedState = { 
                ...state, 
                chatRoom: haveToOpenChat,
                receiverProfile: false
            };
            return updatedState;
        },

        setReceiverProfile: (state, action) => {
            const haveToOpenReceiverProfile = action.payload;
            const updatedState = { 
                ...state, 
                receiverProfile: haveToOpenReceiverProfile
            };
            return updatedState;
        },

        _mainNavigator: (state, action) => {
            const updatedState = {
                ...state, 
                mainNavigator: action.payload
            }
            return updatedState
        },
    }
})


export const { 
    setAddContact,  
    setLoader, 
    _mainNavigator,
    _themeMode,
    setReceiverProfile,
    
 } = NavigateModes.actions;
export default NavigateModes.reducer;