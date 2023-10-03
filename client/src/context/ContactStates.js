import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { useEmitMessage } from '../services/socketIO';
import { DummyContactList } from "./DummyData";
import { sortArrayOfObjectsByName } from "../services/sorting";
import { designMessage } from "../services/designMessage";


// All contact list slice
const initialState = {
  all: sortArrayOfObjectsByName(DummyContactList),
  favorite: sortArrayOfObjectsByName(DummyContactList),
  recent: [ ...DummyContactList ],
  chatRoomContact: {},
  chatBoxMessages: [],
} 
const ContactStates = createSlice({
  name: 'ContactStates',
  initialState: initialState,
  reducers: {

    // Initial update of contact list
    updateContactList: (state, action) => {
      return {
        ...state,
        all: sortArrayOfObjectsByName([...state.all, ...action.payload.all]),
        favorite: sortArrayOfObjectsByName([...state.favorite, ...action.payload.favorite]),
        recent: [...state.recent, ...action.payload.recent]
      }
    },

    // Set chat room contact
    setChatRoomContact: (state, action) => {
      const contact = JSON.parse(action.payload);
      contact.seen = false;
      contact.unSeenMsgCnt = 0;

      const updatedRecentContactList = [...state.recent];
      const index = updatedRecentContactList.findIndex((c) => c.email === contact.email);
      if(index !== -1){

      }else{
        updatedRecentContactList.unshift(0);
        updatedRecentContactList[0] = contact;
      }

      return {
        ...state,
        recent: updatedRecentContactList,
        chatRoomContact: contact,
        chatBoxMessages: [...contact.messages]
      }
    },

    // Update chatbox message
    updateChatBoxMessages: (state, action) => {
      const profile = JSON.parse(action.payload.profile);
      const message = action.payload.message;
      const userId = profile.email;
      const from = (action.payload.from === 'sent') ? true : false;
      const newMessage = designMessage(from, message);  
      profile.messages.push(newMessage);

      if(userId !== state.chatRoomContact.email)
        return state;
      else
        return {
          ...state,
          chatBoxMessages: [...state.chatBoxMessages, newMessage]
        };
    },

    // Update contact message
    updateContactMessage: (state, action) => {
      const profile = JSON.parse(action.payload.profile);
      const message = action.payload.message;
      const userId = profile.email;
      const from = (action.payload.from === 'sent') ? true : false;
      const newMessage = designMessage(from, message);  
      profile.messages.push(newMessage);

      // All
      const allIndex = state.all.findIndex((c) => c.email === userId);
      if(allIndex !== -1)
        state.all[allIndex].messages.push(newMessage);

      // Favorite
      const favoriteIndex = state.favorite.findIndex((c) => c.email === userId);
      if(favoriteIndex !== -1) 
        state.favorite[favoriteIndex].messages.push(newMessage);

      // Recent
      const recentIndex = state.recent.findIndex((c) => c.email === userId);
      if(recentIndex !== -1){
        const recentIndexValue = state.recent[recentIndex];
        state.recent[recentIndex].messages.push(newMessage);
        state.recent.splice(recentIndex, 1);
        state.recent.splice(0, 0, recentIndexValue);

        if(!from && state.chatRoomContact.email !== userId){
          state.recent[0].seen = true;
          state.recent[0].unSeenMsgCnt += 1;
        }
      }else{
        state.recent.unshift(0);
        state.recent[0] = (allIndex !== -1) ? state.all[allIndex] : profile; 

        if(!from && state.chatRoomContact.email !== userId){
          state.recent[0].seen = true;
          state.recent[0].unSeenMsgCnt += 1;
        }

      }

      return state;
    },

    
    // Add new contacts
    addNewContact: (state, action) => {
      return {
        ...state,
        all: sortArrayOfObjectsByName([...state.all, action.payload])
      }
    },

  },
});

export const { 
  updatedRecentContactList,
  setChatRoomContact, 
  updateChatBoxMessages,
  addNewContact,
  updateContactMessage,
  updateRecent,
  updateContactList,
} = ContactStates.actions;
export default ContactStates.reducer;



// Action
export const useChatBoxMessages = (inputRef) => {
  // Hooks
  const receiverProfile = JSON.stringify(useSelector((state) => state.ContactStatesSlice).chatRoomContact);
  const dispatch = useDispatch();
  const { emitMessage } = useEmitMessage();

  // Send message handler
  function handleSendMessage() {
    const messageToSend = inputRef.current.value.trim();
    if (messageToSend === '') 
      return;

    dispatch(updateContactMessage({ profile: receiverProfile, message: messageToSend, from: 'sent' }));
    dispatch(updateChatBoxMessages({ profile: receiverProfile, message: messageToSend, from: 'sent' }));
    emitMessage(messageToSend);
    inputRef.current.value = '';
  }

  // Key Down Event Listner
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSendMessage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [receiverProfile]); 

  return { handleSendMessage };
}
