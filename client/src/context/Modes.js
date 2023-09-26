import { createContext, useState } from "react";




// Dark Mode
export const DarkModeContext = createContext(null);
export function DarkModeContextProvider({ children }){
    const [mode, setMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{mode, setMode}}>
            { children }
        </DarkModeContext.Provider>
    );
}




// Chat Room Screen Mode
export const ChatRoomScreenModeContext = createContext(null);
export function ChatRoomScreenModeContextProvider({ children }){
    const [chatMode, setChatMode] = useState(false);

    return (
        <ChatRoomScreenModeContext.Provider value={{ chatMode, setChatMode }}>
            { children }
        </ChatRoomScreenModeContext.Provider>
    );
}
