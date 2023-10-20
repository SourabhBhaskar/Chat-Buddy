import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";
import { sortArrayOfObjectsByName } from "../services/sorting";
import { designMessage } from "../services/designMessage";
import { redirect } from "react-router-dom";



// Initial State
const initialState =  {
    chatRoomContact: {},
    username: "Sourabh Bhaskar",
    mobile_number: "7000849686",
    email: "sourabhbhaskar71@gmail.com",
    password: "LoveYou3000",
    location: "Indore",
    last_seen: "07:07",
    profile_picture: "https://picsum.photos/id/420/100/100",
    status: "Not Available",
    contacts: {
        all: [...sortArrayOfObjectsByName(DummyContactList)],
        favorite: [...sortArrayOfObjectsByName(DummyContactList)],
        recent: [...DummyContactList],
    },
    groups: [],
    setting: {},
};


// Set Profile
function _Profile(state, action){
    const updatedState = {
        ...state, 
        ...action.payload 
    };
    console.log("Profile", updatedState);
    return updatedState;
}


// Set Current
function ProfileCurrent(state, action){
    const currentContact = action.payload;
    const email = currentContact.email;
    const recentIndex = state.contacts.recent.findIndex((c) => c.email === email);
    if(recentIndex !== -1){
        state.contacts.recent[recentIndex].isSeen = false;
        state.contacts.recent[recentIndex].unSeenMsgCnt = 0;
    }
    state.chatRoomContact = { ...currentContact };
    console.log("Current Contact", currentContact);
}

// Update Messages
function ProfileUpdateMessage(state, action){
    const { message, updateMessageTo } = action.payload;
    const contactToUpdate = updateMessageTo.email;
    const currentContact = state.chatRoomContact.email;
    const updatedMessage = designMessage(message); 

    // All
    const allIndex = state.contacts.all.findIndex((c) => c.email === contactToUpdate);
    if(allIndex !== -1)
        state.contacts.all[allIndex].messages.push(updatedMessage);
    
    // Favorite
    const favoriteIndex = state.contacts.favorite.findIndex((c) => c.email === contactToUpdate);
    if(favoriteIndex !== -1)
        state.contacts.favorite[favoriteIndex].messages.push(updatedMessage);

    // Recent
    const recentIndex = state.contacts.recent.findIndex((c) => c.email === contactToUpdate);
    if(recentIndex !== -1){
        const recentIndexValue = JSON.parse(JSON.stringify(state.contacts.recent[recentIndex]));
        recentIndexValue.messages.push(updatedMessage);
        state.contacts.recent.splice(recentIndex, 1);
        state.contacts.recent.splice(0, 0, recentIndexValue);
    }else{
        if(allIndex !== -1){
            const allIndexValue = JSON.parse(JSON.stringify(state.contacts.all[allIndex]));
            state.contacts.recent.splice(0, 0, allIndexValue);
        }else{
            state.contacts.recent.splice(0, 0, updateMessageTo);
        }
    }

    // Chat Room Contact
    if(contactToUpdate === currentContact){
        state.chatRoomContact.messages.push(updatedMessage);
    }else{
        if(recentIndex !== -1){
            state.contacts.recent[recentIndex].isSeen = true;
            state.contacts.recent[recentIndex].unSeenMsgCnt += 1;

        }
    }
}


// Set Username
function ProfileUsername(state, action){
    const updatedState = { 
        ...state,
        username: action.payload
    }
    console.log("Username updated", action.payload);
    return updatedState;
}

// Set Email
function ProfileEmail(state, action){
    const updatedState = { 
        ...state,
        email: action.payload
    }
    console.log("Email updated", action.payload);
    return updatedState;
}


// Set Mobile Number
function ProfileMobileNumber(state, action){
    const updatedState = { 
        ...state,
        mobile_number: action.payload
    }
    console.log("Mobile number updated", action.payload);
    return updatedState;
}


// Set Password
function ProfilePassword(state, action){
    const updatedState = { 
        ...state,
        password: action.payload
    }
    console.log("Password updated", action.payload);
    return updatedState;
}


// Set Location 
function ProfileLocation(state, action){
    const updatedState = { 
        ...state,
        location: action.payload
    }
    console.log("Location updated", action.payload);
    return updatedState;
}


// Set Picture
function ProfilePicture(state, action){
    const updatedState = { 
        ...state,
        profile_picture: action.payload
    }
    console.log("Profile picture updated", action.payload);
    return updatedState;
}


// Set Status
function ProfileStatus(state, action){
    const updatedState = { 
        ...state,
        status: action.payload
    }
    console.log("Email updated", action.payload);
    return updatedState;
}


// Set Contacts List
function ProfileContactsList(state, action){
    const updatedState = { 
        ...state,
        contacts: action.payload
    }
    console.log("Email updated", action.payload);
    return updatedState;
}


// Add Contact 
function ProfileAddContact(state, action){
    const contactToAdd = action.payload;
    state.contacts.all.push(contactToAdd)
    console.log("Contact Added", contactToAdd.email);
}


// Profile's States
const Profile = createSlice({
    name: 'Profile',
    initialState: initialState,
    reducers: {
        setProfile:              _Profile,
        setProfileCurrent:       ProfileCurrent,
        setProfileUpdateMessage: ProfileUpdateMessage,
        setProfileUsername:      ProfileUsername,
        setProfileMobileNumber:  ProfileMobileNumber,
        setProfileEmail:         ProfileEmail,
        setProfilePassword:      ProfilePassword,
        setProfileLocation:      ProfileLocation,
        setProfilePicture:       ProfilePicture,
        setProfileStatus:        ProfileStatus,
        setProfileContactsList:  ProfileContactsList,
        setProfileAddContact:    ProfileAddContact
    }
});

export const { 
    setProfile,
    setProfileCurrent,
    setProfileUpdateMessage,
    setProfileUsername,
    setProfileMobileNumber,
    setProfileEmail,
    setProfilePassword,
    setProfileLocation,
    setProfilePicture,
    setProfileStatus,
    setProfileContactsList,
    setProfileAddContact
 } = Profile.actions;
export default Profile.reducer;