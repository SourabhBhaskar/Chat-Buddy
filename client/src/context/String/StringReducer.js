

// Set Theme Mode 
export function themeMode(state, action){
    const theme = action.payload;
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
}


// Nav Window 
export function navWindow(state, action){
    const updatedState = {
        ...state, 
        navWindow: action.payload
    }
    return updatedState;
}