import { createContext, useState } from "react";
import { DummyContactList } from "./DummyData";


  
const all = DummyContactList.map((value)=>value.username);
const groups = [];
console.log(all)
const initialValue = {
    username: "",
    mobile_number: "",
    email: "",
    password: "",
    location: "",
    status: "",
    contacts: {
      all: [...DummyContactList].sort((a, b) => a.username.charAt(0).toLowerCase().localeCompare(b.username.charAt(0).toLowerCase())),
      favorite: [...DummyContactList],
      recent: [...DummyContactList]
    },
    groups: groups,
    last_seen: "",
  }

export const MyProfileContext = createContext(null);
export function MyProfileContextContextProvider({ children }){
    const [myProfile, setMyProfile] = useState(initialValue);

    return (
        <MyProfileContext.Provider value={{myProfile, setMyProfile}}>
            { children }
        </MyProfileContext.Provider>
    );
}

