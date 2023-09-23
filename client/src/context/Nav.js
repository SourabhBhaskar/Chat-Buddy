import { createContext, useState } from "react";

export const NavContext = createContext(null);
export function NavContextProvider({ children }){
    const [nav, setNav] = useState('chats');

    return (
        <NavContext.Provider value={{nav, setNav}}>
            { children }
        </NavContext.Provider>
    );
}