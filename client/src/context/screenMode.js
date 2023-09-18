import { createContext, useState } from "react";

export const ScreenModeContext = createContext(null);
export function ScreenModeContextProvider({ children }){
    const [mode, setMode] = useState(true);

    return (
        <ScreenModeContext.Provider value={{mode, setMode}}>
            { children }
        </ScreenModeContext.Provider>
    );
}
