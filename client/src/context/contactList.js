import React, { createContext, useState } from "react";



const AllContactList = [
    {
      name: "Alice", email: "1", status: "2023-09-10", profilePic:"https://picsum.photos/id/237/100/100", messages: [
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
      name: "Bob", email: "2", status: "2023-08-25", profilePic:"https://picsum.photos/id/238/100/100", messages: [
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
      name: "Charlie", email: "3", status: "2023-09-01", profilePic:"https://picsum.photos/id/239/100/100", messages: [
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
      name: "David", email: "4", status: "2023-09-05", profilePic:"https://picsum.photos/id/240/100/100", messages: [
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
      name: "Eve", email: "5", status: "2023-09-15", profilePic:"https://picsum.photos/id/241/100/100", messages: [
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
      name: "Frank", email: "6", status: "2023-09-03", profilePic:"https://picsum.photos/id/242/100/100", messages: [
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
      name: "Grace", email: "7", status: "2023-08-28", profilePic:"https://picsum.photos/id/243/100/100", messages: [
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
      name: "Hannah", email: "8", status: "2023-09-02", profilePic:"https://picsum.photos/id/244/100/100", messages: [
        ['Hello Hannah', 'received'],
        ['Hey!', 'sent'],
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent']
      ]
    },
    {
      name: "Isaac", email: "9", status: "2023-09-09", profilePic:"https://picsum.photos/id/345/100/100", messages: [
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent']
      ]
    },
    {
      name: "Jack", email: "10", status: "2023-09-06", profilePic:"https://picsum.photos/id/446/100/100", messages: [
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent']
      ]
    },
    {
      name: "Lily", email: "11", status: "2023-09-04", profilePic:"https://picsum.photos/id/247/100/100",  messages: [
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent']
      ]
    },
    {
      name: "Matthew", email: "12", status: "2023-09-14", profilePic:"https://picsum.photos/id/248/100/100", messages: [
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent']
      ]
    },
    {
      name: "Nora", email: "13", status: "2023-09-07", profilePic:"https://picsum.photos/id/249/100/100", messages: [
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent']
      ]
    },
    {
      name: "Oliver", email: "14", status: "2023-09-08", profilePic:"https://picsum.photos/id/250/100/100", messages: [
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent']
      ]
    },
    {
      name: "Penelope", email: "15", status: "2023-08-29", profilePic:"https://picsum.photos/id/251/100/100", messages: [
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent']
      ]
    },
    {
      name: "Quinn", email: "16", status: "2023-09-13", profilePic:"https://picsum.photos/id/252/100/100",  messages: [
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent']
      ]
    },
    {
      name: "Robert", email: "17", status: "2023-09-11", profilePic:"https://picsum.photos/id/253/100/100", messages: [
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent']
      ]
    },
    {
      name: "Sophia", email: "18", status: "2023-09-12", profilePic:"https://picsum.photos/id/254/100/100", messages: [
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent']
      ]
    },
    {
      name: "Thomas", email: "19", status: "2023-09-16", profilePic:"https://picsum.photos/id/255/100/100", messages: [
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Xander', 'received'],
        ['Hello Xander!', 'sent']
      ]
    },
    {
      name: "Uma", email: "20", status: "2023-09-18", profilePic:"https://picsum.photos/id/256/100/100", messages: [
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Xander', 'received'],
        ['Hello Xander!', 'sent'],
        ['Hello Yara', 'received'],
        ['Hi Yara!', 'sent']
      ]
    },
  ]; 
  
  const RecentContactList = [
    {
      name: "Alice", email: "1", status: "2023-09-10", profilePic:"https://picsum.photos/id/237/100/100", messages: [
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
      name: "Bob", email: "2", status: "2023-08-25", profilePic:"https://picsum.photos/id/238/100/100", messages: [
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
      name: "Charlie", email: "3", status: "2023-09-01", profilePic:"https://picsum.photos/id/239/100/100", messages: [
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
      name: "David", email: "4", status: "2023-09-05", profilePic:"https://picsum.photos/id/240/100/100", messages: [
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
      name: "Eve", email: "5", status: "2023-09-15", profilePic:"https://picsum.photos/id/241/100/100", messages: [
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
      name: "Frank", email: "6", status: "2023-09-03", profilePic:"https://picsum.photos/id/242/100/100", messages: [
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
      name: "Grace", email: "7", status: "2023-08-28", profilePic:"https://picsum.photos/id/243/100/100", messages: [
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
      name: "Hannah", email: "8", status: "2023-09-02", profilePic:"https://picsum.photos/id/244/100/100", messages: [
        ['Hello Hannah', 'received'],
        ['Hey!', 'sent'],
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent']
      ]
    },
    {
      name: "Isaac", email: "9", status: "2023-09-09", profilePic:"https://picsum.photos/id/345/100/100", messages: [
        ['Hi Isaac', 'received'],
        ['Hello Isaac!', 'sent'],
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent']
      ]
    },
    {
      name: "Jack", email: "10", status: "2023-09-06", profilePic:"https://picsum.photos/id/446/100/100", messages: [
        ['Hello Jack', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent']
      ]
    },
    {
      name: "Lily", email: "11", status: "2023-09-04", profilePic:"https://picsum.photos/id/247/100/100",  messages: [
        ['Hi Lily', 'received'],
        ['Good morning!', 'sent'],
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent']
      ]
    },
    {
      name: "Matthew", email: "12", status: "2023-09-14", profilePic:"https://picsum.photos/id/248/100/100", messages: [
        ['Hey Matthew', 'received'],
        ["What's up?", 'sent'],
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent']
      ]
    },
    {
      name: "Nora", email: "13", status: "2023-09-07", profilePic:"https://picsum.photos/id/249/100/100", messages: [
        ['Hello Nora', 'received'],
        ['Hi Nora!', 'sent'],
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent']
      ]
    },
    {
      name: "Oliver", email: "14", status: "2023-09-08", profilePic:"https://picsum.photos/id/250/100/100", messages: [
        ['Hi Oliver', 'received'],
        ['Hello Oliver!', 'sent'],
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent']
      ]
    },
    {
      name: "Penelope", email: "15", status: "2023-08-29", profilePic:"https://picsum.photos/id/251/100/100", messages: [
        ['Hello Penelope', 'received'],
        ['Hey!', 'sent'],
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent']
      ]
    },
    {
      name: "Quinn", email: "16", status: "2023-09-13", profilePic:"https://picsum.photos/id/252/100/100",  messages: [
        ['Hi Quinn', 'received'],
        ['How are you?', 'sent'],
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent']
      ]
    },
    {
      name: "Robert", email: "17", status: "2023-09-11", profilePic:"https://picsum.photos/id/253/100/100", messages: [
        ['Hi Robert', 'received'],
        ['Good afternoon!', 'sent'],
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent']
      ]
    },
    {
      name: "Sophia", email: "18", status: "2023-09-12", profilePic:"https://picsum.photos/id/254/100/100", messages: [
        ['Hello Sophia', 'received'],
        ['Hi Sophia!', 'sent'],
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent']
      ]
    },
    {
      name: "Thomas", email: "19", status: "2023-09-16", profilePic:"https://picsum.photos/id/255/100/100", messages: [
        ['Hi Thomas', 'received'],
        ['Hello Thomas!', 'sent'],
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Xander', 'received'],
        ['Hello Xander!', 'sent']
      ]
    },
    {
      name: "Uma", email: "20", status: "2023-09-18", profilePic:"https://picsum.photos/id/256/100/100",  messages: [
        ['Hello Uma', 'received'],
        ['Hey Uma!', 'sent'],
        ['Hi Victor', 'received'],
        ['Good evening!', 'sent'],
        ['Hello William', 'received'],
        ['Hi there!', 'sent'],
        ['Hi Xander', 'received'],
        ['Hello Xander!', 'sent'],
        ['Hello Yara', 'received'],
        ['Hi Yara!', 'sent']
      ]
    },
  ];



  export const AllContactListContext = createContext(null);
  export const AllContactListContextProvider = ({ children }) => {
      const [allContactList, setAllContactList] = useState([...AllContactList]);
  
      return (
          <AllContactListContext.Provider value={{allContactList, setAllContactList}}>
              {children}
          </AllContactListContext.Provider>
      );
  };


  export const RecentContactListContext = createContext(null);
  export const RecentContactListContextProvider = ({ children }) => {
      const [recentContactList, setRecentContactList] = useState([...RecentContactList]);
  
      return (
          <RecentContactListContext.Provider value={{recentContactList, setRecentContactList}}>
              {children}
          </RecentContactListContext.Provider>
      );
  };




