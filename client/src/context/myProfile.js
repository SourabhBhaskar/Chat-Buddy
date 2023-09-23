import { createContext, useState } from "react";

export let myPrivateProfile = {
    email: ''
};
export let myPublicProfile = {
    email: ''
};

export function setMyProfile(profiles){
    myPrivateProfile = profiles.private;
    myPublicProfile = profiles.public;
    console.log(myPublicProfile, myPrivateProfile);
}

export const MyProfileContext = createContext(null);
export function MyProfileContextContextProvider({ children }){
    const [myProfile, setMyProfile] = useState(undefined);

    return (
        <MyProfileContext.Provider value={{myProfile, setMyProfile}}>
            { children }
        </MyProfileContext.Provider>
    );
}