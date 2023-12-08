// Imports
import React, { useEffect, useRef, useSyncExternalStore } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { icons } from '../../../utils/icons.util';
import { setIsChatRoomOpen } from '../../../context/Boolean/booleanSlice';
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
  
  const handleConversationPanel = () => dispatch(setIsChatRoomOpen(false));

  return (
    <section className='w-full h-full absolute flex flex-col text-l-primary-txt-color dark:text-d-primary-txt-color'>
      
      <UserInfo>
        <SubFlexDiv>
          <IconButton onClick={handleConversationPanel}>
            <Icon icon={icons.back} className='mx-4' />
          </IconButton>
          <Info />
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

      <ConversationMessages messagesRef={messagesRef} />

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
export default React.memo(ConversationPanel);