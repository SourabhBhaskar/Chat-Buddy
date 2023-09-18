import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ContactListContextProvider } from './context/contactList';
import { InChatRoomContactContextProvider, InChatRoomMessagesContextProvider } from './context/chatRoomContext';
import { ScreenModeContextProvider } from './context/screenMode';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InChatRoomMessagesContextProvider>
      <InChatRoomContactContextProvider>
        <ContactListContextProvider>
          <ScreenModeContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ScreenModeContextProvider>
        </ContactListContextProvider>
      </InChatRoomContactContextProvider>
    </InChatRoomMessagesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
