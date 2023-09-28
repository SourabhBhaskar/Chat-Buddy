import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useEmitMessage } from '../services/socketIO';
import { DummyContactList } from "./DummyData";


// All contact list slice
const initialState = {
  all: [...DummyContactList],
  favorite: [...DummyContactList],
  recent: [ ...DummyContactList ],
  chatRoomContact: {},
  chatBoxMessages: [],
} 
const ContactStates = createSlice({
  name: 'ContactStates',
  initialState: initialState,
  reducers: {
    // Set chat room contact
    setChatRoomContact: (state, action) => {
      const updatedState = {
        ...state,
        chatRoomContact: action.payload,
        chatBoxMessages: [...action.payload.messages]
      }
      return updatedState;
    },

    // Update ChatBox Messages messeages
    updateChatBoxMessages: (state, action) => {
      const date = new Date();
      const newTime = date.getHours() + ':' + date.getMinutes();
      const newMessage = {
        direction: 'sent',
        time: newTime,
        message: action.payload,
      };
      const updatedState = {
        ...state,
        chatBoxMessages: [...state.chatBoxMessages, newMessage]
      };
      return updatedState;
    },

    // Update chat room contact messages
    setContactMessages: (state, action) => {
      // All
      const allIndex = state.all.findIndex((c) => c.email === state.chatRoomContact.email);
      if(allIndex !== -1) state.all[allIndex].messages = state.chatBoxMessages;

      // Favorite
      const favoriteIndex = state.favorite.findIndex((c) => c.email === state.chatRoomContact.email);
      if(favoriteIndex !== -1) state.favorite[favoriteIndex].messages = state.chatBoxMessages;
  
      // Recent
      const recentIndex = state.recent.findIndex((c) => c.email === state.chatRoomContact.email);
      if(recentIndex !== -1) state.recent[recentIndex].messages = state.chatBoxMessages;
  
      return state;
    },
  },
});

export const { 
  setChatRoomContact, 
  updateChatBoxMessages,
  setContactMessages, 
} = ContactStates.actions;
export default ContactStates.reducer;



// Action
export const useChatBoxMessages = (inputRef) => {
  // Hooks
  const dispatch = useDispatch();
  const { emitMessage } = useEmitMessage();

  // Send message handler
  function handleSendMessage() {
    const message = inputRef.current.value.trim();
    if (message === '') 
      return;

    inputRef.current.value = '';
    dispatch(updateChatBoxMessages(message));
    dispatch(setContactMessages());
    emitMessage(message);
  }

  // Key Down Event Listner
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSendMessage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); 

  return { handleSendMessage };
}
