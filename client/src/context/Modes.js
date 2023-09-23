import { createContext, useState } from "react";



export const DarkModeContext = createContext(null);
export function DarkModeContextProvider({ children }){
    const [mode, setMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{mode, setMode}}>
            { children }
        </DarkModeContext.Provider>
    );
}
