import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { InChatRoomContactContextProvider, InChatRoomMessagesContextProvider } from './context/chatRoomContext';
import { DarkModeContextProvider, ChatRoomScreenModeContextProvider } from './context/Modes';
import { NavContextProvider } from './context/Nav';
import { LoaderContextProvider } from './context/Loader';
import { MyProfileContextContextProvider } from './context/myProfile';
import store from './context/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InChatRoomMessagesContextProvider>
      <InChatRoomContactContextProvider>
          <DarkModeContextProvider>
              <NavContextProvider>
                <LoaderContextProvider>
                  <MyProfileContextContextProvider>
                    <ChatRoomScreenModeContextProvider>
                      
                      <BrowserRouter>
                        <Provider store={store}>
                          <App />
                        </Provider>
                      </BrowserRouter>

                    </ChatRoomScreenModeContextProvider>
                  </MyProfileContextContextProvider>
                </LoaderContextProvider>
              </NavContextProvider>
          </DarkModeContextProvider>
      </InChatRoomContactContextProvider>
    </InChatRoomMessagesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
