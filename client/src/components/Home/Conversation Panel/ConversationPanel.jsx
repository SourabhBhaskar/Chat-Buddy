// Imports
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons.util';
import { setIsChatRoomOpen, setIsReceiverProfileOpen } from '../../../context/Boolean/booleanSlice';
import defaultPic from '../../../assets/profile.jpg';
import SubFlexDiv from './Common/SubFlexDiv';
import UserInfo from './UserInfo/UserInfo';
import IconButton from './Common/IconButton';
import Info from './UserInfo/Info/Info';
import ConversationMessages from './ConversationMessages/ConversationMessages';
import Message from './ConversationMessages/Message';

import MessageSender from './MessageSender/MessageSender';
import MessageInput from './MessageSender/MessageInput';
import MessageSendButton from './MessageSender/MessageSendButton';


// Conversation Panel
function ConversationPanel() {
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { 
    username, 
    email, 
    phone, 
    password, 
    profile_picture, 
    status, description, 
    last_seen, location 
  } = useSelector(state => state.UserSlice);
  const { messages } = useSelector(state => state.ConnectionsSlice).currentConnection;

  const handleConversationPanel = () => dispatch(setIsChatRoomOpen(false));
  const handleConnectionProfile = () => dispatch(setIsReceiverProfileOpen(true));

  return (
    <section className='w-full h-full absolute flex flex-col text-l-primary-txt-color dark:text-d-primary-txt-color'>
      
      <UserInfo>
        <SubFlexDiv>
          <IconButton onClick={handleConversationPanel}>
            <Icon icon={icons.back} className='mx-4' />
          </IconButton>
          <Info username={username} last_seen={last_seen} profile_picture={profile_picture || defaultPic} openConnectionProfile={handleConnectionProfile} />
        </SubFlexDiv>
        <SubFlexDiv>
          <IconButton>
            <Icon icon={icons.search} className='hidden xl:flex mx-4' />
          </IconButton>
          <IconButton>
            <Icon icon={icons.audioCall} className='hidden xl:flex mx-4' />
          </IconButton>
          <IconButton>
            <Icon icon={icons.vidoeCall} className='hidden xl:flex mx-4' />
          </IconButton>
          <IconButton>
            <Icon icon={icons.menu} className='mx-4' />
          </IconButton>
        </SubFlexDiv>
      </UserInfo>

      <ConversationMessages messagesRef={messagesRef} >
        {messages.map((value, index) => <Message key={index} message={value} />)}
      </ConversationMessages>

      <MessageSender>
        <MessageInput inputRef={inputRef} />
        <IconButton>
          <Icon icon={icons.emoji} />
        </IconButton>
        <IconButton>
          <Icon icon={icons.sendMore} />
        </IconButton>
        <MessageSendButton inputRef={inputRef} />
      </MessageSender>

    </section>
  )
}


// Exports
export default ConversationPanel;