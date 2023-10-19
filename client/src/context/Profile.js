import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";
import { sortArrayOfObjectsByName } from "../services/sorting";
import { designMessage } from "../services/designMessage";



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
    const updatedState = {
        ...state,
        chatRoomContact: currentContact
    }
    console.log("Current Contact", currentContact);
    return updatedState;
}

// Update Messages
function ProfileUpdateMessage(state, action){
    const { message, from, sendTo } = action.payload;
    const messageToUpdate = designMessage(from, message); 

    // All
    const allIndex = state.contacts.all.findIndex((c) => c.email === sendTo);
    if(allIndex !== -1)
        state.contacts.all[allIndex].messages.push(messageToUpdate);
    
    // Favorite
    const favoriteIndex = state.contacts.favorite.findIndex((c) => c.email === sendTo);
    if(favoriteIndex !== -1)
        state.contacts.favorite[favoriteIndex].messages.push(messageToUpdate);

    // Recent
    const recentIndex = state.contacts.recent.findIndex((c) => c.email === sendTo);
    if(recentIndex !== -1){
        const recentIndexValue = state.contacts.recent[recentIndex];
        state.contacts.recent[recentIndex].messages.push(messageToUpdate);
        state.contacts.recent.splice(recentIndex, 1);
        state.contacts.recent.splice(0, 0, recentIndexValue);
    }

    console.log(messageToUpdate);
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