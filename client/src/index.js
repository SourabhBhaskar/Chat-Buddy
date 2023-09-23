import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ContactListContextProvider } from './context/contactList';
import { InChatRoomContactContextProvider, InChatRoomMessagesContextProvider } from './context/chatRoomContext';
import { DarkModeContextProvider } from './context/Modes';
import { NavContextProvider } from './context/Nav';
import { LoaderContextProvider } from './context/Loader';
import { MyProfileContextContextProvider } from './context/myProfile';
import Nav from './components/Nav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InChatRoomMessagesContextProvider>
      <InChatRoomContactContextProvider>
        <ContactListContextProvider>
          <DarkModeContextProvider>
              <NavContextProvider>
                <LoaderContextProvider>
                  <MyProfileContextContextProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </MyProfileContextContextProvider>
                </LoaderContextProvider>
              </NavContextProvider>
          </DarkModeContextProvider>
        </ContactListContextProvider>
      </InChatRoomContactContextProvider>
    </InChatRoomMessagesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
