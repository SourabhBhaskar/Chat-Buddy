import { createSlice } from "@reduxjs/toolkit";
import { DummyContactList } from "./DummyData";
import { designMessage } from "../services/designMessage";
import { convertEmail } from '../services/conversion';




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
        all: [],
        favorite: [],
        recent: []
    },
    groups: {},
    setting: {},
    isOnline: false,
};


// Set Profile
function setProfileReducer(state, action){
    const dummyData = DummyContactList.map((value)=>({ email: convertEmail(value.email), username: value.username }));
    const dummyMap = DummyContactList.reduce((acc, contact) => {
        const key = convertEmail(contact.email);
        return { ...acc, [key]: contact };
    }, {});

    const { contactsMap, all, favorite, recent } = action.payload.contacts;
    const updatedcontactsMap = { ...contactsMap, ...dummyMap };
    const updatedAll = [ ...all, ...dummyData ];
    const updatedFavorite = [ ...favorite, ...dummyData ];
    const updatedRecent = [ ...recent, ...dummyData ];
    
    const updatedState = {
        ...state,
        ...action.payload,
        contacts: {
            contactsMap: updatedcontactsMap,
            all: updatedAll,
            favorite: updatedFavorite,
            recent: updatedRecent
        }
    }
    
    console.log("Profile", updatedState);
    return updatedState;
}


// Set Chat Room Contact
function chatRoomContactReducer(state, action){
    const contactId = action.payload;
    const convertedContactId = convertEmail(contactId);
    const contactData = state.contacts.contactsMap[convertedContactId];
    contactData.isSeen = false;
    contactData.unSeenMsgCnt = 0;
    state.chatRoomContact = { ...contactData };
    console.log("Current Contact", contactData);
}


// Update Last Seen
function lastSeenReducer(state, action){
    const { userId, lastSeen } = action.payload;
    const updatedUserId = convertEmail(userId);
    const isExist = state.contacts.contactsMap[updatedUserId];
    if(isExist){
        isExist.last_seen = lastSeen;
        if(state.chatRoomContact.email === userId)
            state.chatRoomContact.last_seen = lastSeen;
        if(lastSeen === 'online') console.log(`${userId} is online`);
        else console.log(`${userId} left at ${lastSeen}`)
    }
}


// Typing Start & End
function typingStartReducer(state, action){
    const userId = action.payload;
    const updatedUserId = convertEmail(userId);
    const isExit = state.contacts.contactsMap[updatedUserId];
    if(isExit){
        isExit.last_seen = 'typing...';
        if(state.chatRoomContact.email === userId)
            state.chatRoomContact.last_seen = 'typing...';
    }
}
function typingEndReducer(state, action){
    const userId = action.payload;
    const updatedUserId = convertEmail(userId);
    const isExit = state.contacts.contactsMap[updatedUserId];
    if(isExit){
        isExit.last_seen = 'online';
        if(state.chatRoomContact.email === userId)
            state.chatRoomContact.last_seen = 'online';
    }
}


// Send Message 
function sendMessageReducer(state, action){
    const { message, receiverId } = action.payload;
    const updatedMessage = designMessage(message, true);
    const updatedReceiverId = convertEmail(receiverId);
    const chatRoomContactId = state.chatRoomContact.email;
    
    // Update the chat room contact
    if (receiverId === chatRoomContactId) 
        state.chatRoomContact.messages.push(updatedMessage);

    // Update contacts
    const receiverIdData = state.contacts.contactsMap[updatedReceiverId];
    if(receiverIdData)
        receiverIdData.messages.push(updatedMessage);

    // update recent list
    const recentIndex = state.contacts.recent.findIndex( e => e.email === updatedReceiverId);
    if (recentIndex !== -1) {
        const recentContact = state.contacts.recent[recentIndex];
        state.contacts.recent.splice(recentIndex, 1);
        state.contacts.recent.unshift(recentContact);
    } else {
        state.contacts.recent.unshift({ email: updatedReceiverId, username: receiverIdData.username });
    }
    console.log(`Sent to ${receiverId} : ${message}`);
}


// Receive Message
function receiveMessageReducer(state, action){
    const { message, sender } = action.payload;
    const senderId = sender.email;
    const updatedMessage = designMessage(message, false);
    const updatedSenderId = convertEmail(senderId);
    const chatRoomContactId = state.chatRoomContact.email;
    
    // Update the chat room contact
    if (senderId === chatRoomContactId) 
        state.chatRoomContact.messages.push(updatedMessage);

    // Update contacts
    const senderIdData = state.contacts.contactsMap[updatedSenderId];
    if(senderIdData){
        senderIdData.messages.push(updatedMessage); 
    }
    else{
        state.contacts.recent.push({ email: updatedSenderId, username: sender.username});
        state.contacts.contactsMap[updatedSenderId] = sender;
    }

    // update recent list
    const recentIndex = state.contacts.recent.findIndex( e => e.email === updatedSenderId);
    if (recentIndex !== -1) {
        const recentContact = state.contacts.recent[recentIndex];
        state.contacts.recent.splice(recentIndex, 1);
        state.contacts.recent.unshift(recentContact);

        // Update message count and seen
        const recentContactData = state.contacts.contactsMap[recentContact.email];
        if(recentContactData.email !== state.chatRoomContact.email){
            recentContactData.isSeen = true;
            recentContactData.unSeenMsgCnt++;
        }
    } else {
        if(senderIdData) 
            state.contacts.recent.unshift({ email: updatedSenderId, username: senderIdData.username });
    }

    console.log(`Received from ${senderId} : ${message}`);
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
function addContact(state, action){
    const contactToAdd = action.payload;
    const username = contactToAdd.username;
    const contactId = contactToAdd.email;
    const updatedContactId = convertEmail(contactId);
    state.contacts.all.push({ email: updatedContactId, username: username});
    state.contacts.contactsMap[updatedContactId] = contactToAdd;
    console.log("Contact Added", contactToAdd.email);
}


// Profile's States
const Profile = createSlice({
    name: 'Profile',
    initialState: initialState,
    reducers: {
        _setProfile:                     setProfileReducer,
        _lastSeen:                       lastSeenReducer,
        _typingStart:                    typingStartReducer,
        _typingEnd:                      typingEndReducer,
        _sendMessage:                    sendMessageReducer,  
        _receiveMessage:                 receiveMessageReducer, 
        _chatRoomContact:                chatRoomContactReducer, 
        setProfileUsername:              ProfileUsername,
        setProfileMobileNumber:          ProfileMobileNumber,
        setProfileEmail:                 ProfileEmail,
        setProfilePassword:              ProfilePassword,
        setProfileLocation:              ProfileLocation,
        setProfilePicture:               ProfilePicture,
        setProfileStatus:                ProfileStatus,
        setProfileContactsList:          ProfileContactsList,
        _addContact:                     addContact
    }
});

export const { 
    _setProfile,
    _lastSeen,
    _typingStart,
    _typingEnd,
    _sendMessage,
    _receiveMessage,
    _chatRoomContact,
    setProfileUsername,
    setProfileMobileNumber,
    setProfileEmail,
    setProfilePassword,
    setProfileLocation,
    setProfilePicture,
    setProfileStatus,
    setProfileContactsList,
    _addContact
 } = Profile.actions;
export default Profile.reducer;