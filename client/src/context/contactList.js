import React, { createContext, useState } from "react";



const ContactList = [
    {
      username: "Alice", email: "1", last_seen: "2023-09-10", profile_picture:"https://picsum.photos/id/237/100/100", messages: [
        ['Hi', 'received'],
        ['How are you?', 'sent'],
        ['Hello', 'received'],
        ['I am doing well, thanks!', 'sent'],
        ['Nice weather today!', 'received'],
        ['Yes, it is!', 'sent'],
        ['What are your plans for the day?', 'received'],
        ['Not much, just work.', 'sent'],
        ['That sounds busy!', 'received'],
        ["It's alright", 'sent']
      ]
    },
    {
      username: "Bob", email: "2", last_seen: "2023-08-25", profile_picture:"https://picsum.photos/id/238/100/100", messages: [
        ['Hello', 'sent'],
        ['Good morning!', 'received'],
        ['Hey!', 'sent'],
        ['What are you up to?', 'received'],
        ['Not much, just chilling.', 'sent'],
        ['Cool!', 'received'],
        ["How's work?", 'sent'],
        ['Busy as usual.', 'received'],
        ['Hang in there!', 'sent'],
        ["I will.", 'received']
      ]
    },
    {
      username: "Charlie", email: "3", last_seen: "2023-09-01", profile_picture:"https://picsum.photos/id/239/100/100", messages: [
        ['Hey!', 'received'],
        ['What are you up to?', 'sent'],
        ['Not much, just reading.', 'received'],
        ['What are you reading?', 'sent'],
        ['A mystery novel.', 'received'],
        ['Sounds interesting!', 'sent'],
        ['Have you solved the mystery yet?', 'received'],
        ["Not yet, but I'm close!", 'sent'],
        ['Good luck!', 'received'],
        ["Thanks!", 'sent']
      ]
    },
    {
      username: "David", email: "4", last_seen: "2023-09-05", profile_picture:"https://picsum.photos/id/240/100/100", messages: [
        ['Hi there!', 'sent'],
        ['I am doing well, thanks!', 'received'],
        ['Nice weather today!', 'received'],
        ['Yes, it is!', 'sent'],
        ['What are your plans for the day?', 'received'],
        ['Not much, just work.', 'sent'],
        ['That sounds busy!', 'received'],
        ["It's alright.", 'sent'],
        ['Hello', 'received'],
        ['Good morning!', 'received']
      ]
    },
    {
      username: "Eve", email: "5", last_seen: "2023-09-15", profile_picture:"https://picsum.photos/id/241/100/100", messages: [
        ['Hello Eve', 'received'],
        ['Hi!', 'sent'],
        ['Good evening', 'received'],
        ['Hi Frank!', 'sent'],
        ['Hi Grace', 'received'],
        ["How's it going?", 'sent'],
        ['Hello Hannah', 'received'],
        ['Hey!', 'sent'],
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent']
      ]
    },
    {
      username: "Frank", email: "6", last_seen: "2023-09-03", profile_picture:"https://picsum.photos/id/242/100/100", messages: [
        ['Good evening', 'received'],
        ['Hi Frank!', 'sent'],
        ['Hi Grace', 'received'],
        ["How's it going?", 'sent'],
        ['Hello Hannah', 'received'],
        ['Hey!', 'sent'],
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent']
      ]
    },
    {
      username: "Grace", email: "7", last_seen: "2023-08-28", profile_picture:"https://picsum.photos/id/243/100/100", messages: [
        ['Hi Grace', 'received'],
        ["How's it going?", 'sent'],
        ['Hello Hannah', 'received'],
        ['Hey!', 'sent'],
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent']
      ]
    },
    {
      username: "Homelander", email: "8", last_seen: "2023-09-10", profile_picture:"https://picsum.photos/id/287/100/100", messages: [
        ['Hi', 'received'],
        ['How are you?', 'sent'],
        ['Hello', 'received'],
        ['I am doing well, thanks!', 'sent'],
        ['Nice weather today!', 'received'],
        ['Yes, it is!', 'sent'],
        ['What are your plans for the day?', 'received'],
        ['Not much, just work.', 'sent'],
        ['That sounds busy!', 'received'],
        ["It's alright", 'sent']
      ]
    },
    {
      username: "Superman", email: "9", last_seen: "2023-08-25", profile_picture:"https://picsum.photos/id/288/100/100", messages: [
        ['Hello', 'sent'],
        ['Good morning!', 'received'],
        ['Hey!', 'sent'],
        ['What are you up to?', 'received'],
        ['Not much, just chilling.', 'sent'],
        ['Cool!', 'received'],
        ["How's work?", 'sent'],
        ['Busy as usual.', 'received'],
        ['Hang in there!', 'sent'],
        ["I will.", 'received']
      ]
    },
    {
      username: "Batman", email: "10", last_seen: "2023-09-01", profile_picture:"https://picsum.photos/id/289/100/100", messages: [
        ['Hey!', 'received'],
        ['What are you up to?', 'sent'],
        ['Not much, just reading.', 'received'],
        ['What are you reading?', 'sent'],
        ['A mystery novel.', 'received'],
        ['Sounds interesting!', 'sent'],
        ['Have you solved the mystery yet?', 'received'],
        ["Not yet, but I'm close!", 'sent'],
        ['Good luck!', 'received'],
        ["Thanks!", 'sent']
      ]
    }
  ]; 
  

  export const ContactListContext = createContext(null);
  export const ContactListContextProvider = ({ children }) => {
      const [contactList, setContactList] = useState([...ContactList]);
  
      return (
          <ContactListContext.Provider value={{contactList, setContactList}}>
              {children}
          </ContactListContext.Provider>
      );
  };





