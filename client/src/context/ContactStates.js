import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { useEmitMessage } from '../services/socketIO';
import { DummyContactList } from "./DummyData";
import { sortArrayOfObjectsByName } from "../services/sorting";
import { designMessage } from "../services/designMessage";




// Initial update of contact list
function handleUpdateContactList(state, action){
  console.log(action.payload);
}


// Handle Set Current Contact
function handleSetChatRoomContact(state, action){
  const currContactEmail = action.payload.email;
  const currContactIndex = state.contacts.findIndex((c) => c.email === currContactEmail);
  state.currContactIndex = currContactIndex;
  state.currContact = state.contacts[currContactIndex];
};


// Handle Send Message
function handleSendMessage(state, action){
  const message = action.payload.message;
  const from = (action.payload.from === 'sent') ? true : false;
  const newMessage = designMessage(from, message);  
  const currIndex = state.currContactIndex;
  state.contacts[currIndex].messages.push(newMessage);
}


// Handle Receive Message
function handleReceiveMessage(){

}


// Add New Contacts
function handleAddNewContact(state, action){
  return {
    ...state,
    all: sortArrayOfObjectsByName([...state.all, action.payload])
  }
}





// Initial State
const initialState = {
  currContactIndex: -1,
  currContact: undefined,
  contacts: sortArrayOfObjectsByName(DummyContactList)
} 


// Slice
const ContactStates = createSlice({
  name: 'ContactStates',
  initialState: initialState,
  reducers: {
    // Initial update of contact list
    updateContactList: handleUpdateContactList,

    // Set Current Contact
    setChatRoomContact: handleSetChatRoomContact,

    // Send Message
    sendMessage: handleSendMessage,

    // Receive Message
    receiveMessage: handleReceiveMessage,

    // Update contact message
    updateUserMessage: (state, action) => {
      const profile = JSON.parse(action.payload.profile);
      // const message = action.payload.message;
      // const userId = profile.email;
      // const from = (action.payload.from === 'sent') ? true : false;
      // const newMessage = designMessage(from, message);  
      // profile.messages.push(newMessage);

      // // Recent
      // const recentIndex = state.recent.findIndex((c) => c.email === userId);
      // if(recentIndex !== -1){
      //   const recentIndexValue = state.recent[recentIndex];
      //   state.recent[recentIndex].messages.push(newMessage);
      //   state.recent.splice(recentIndex, 1);
      //   state.recent.splice(0, 0, recentIndexValue);

      //   if(!from && state.chatRoomContact.email !== userId){
      //     state.recent[0].seen = true;
      //     state.recent[0].unSeenMsgCnt += 1;
      //   }
      // }else{
      //   state.recent.unshift(0);
      //   state.recent[0] = (allIndex !== -1) ? state.all[allIndex] : profile; 

      //   if(!from && state.chatRoomContact.email !== userId){
      //     state.recent[0].seen = true;
      //     state.recent[0].unSeenMsgCnt += 1;
      //   }

      // }

      return state;
    },

    
    // Add new contacts
    addNewContact: handleAddNewContact

  },
});

export const { 
  updateContactList,
  setChatRoomContact, 
  sendMessage,
  receiveMessage,
  addNewContact
} = ContactStates.actions;
export default ContactStates.reducer;



// Action
export const useChatBoxMessages = (inputRef) => {
  const receiverProfile = useSelector((state) => state.ContactStatesSlice).currContact;
  const dispatch = useDispatch();
  const { emitMessage } = useEmitMessage();

  function handleSendMessage() {
    const messageToSend = inputRef.current.value.trim();
    if (messageToSend === '') 
      return;

    dispatch(sendMessage({ profile: receiverProfile, message: messageToSend, from: 'sent' }));
    emitMessage(messageToSend);
    inputRef.current.value = '';
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleSendMessage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [receiverProfile]); 

  return { handleSendMessage };
}
