import React, { createContext, useState } from "react";



export const InChatRoomContactContext = createContext(null);
export const InChatRoomContactContextProvider = ({ children }) => {
    const [inChatRoomContact, setInChatRoomContact ] = useState(false);

    return (
        <InChatRoomContactContext.Provider value={{ inChatRoomContact, setInChatRoomContact }}>
            {children}
        </InChatRoomContactContext.Provider>

    );
};


export const InChatRoomMessagesContext = createContext(null);
export const InChatRoomMessagesContextProvider = ({ children }) => {
    const [inChatRoomMessages, setInChatRoomMessages] = useState([]);
    return (
        <InChatRoomMessagesContext.Provider value={{ inChatRoomMessages, setInChatRoomMessages }}>
            {children}
        </InChatRoomMessagesContext.Provider>
    );
};

