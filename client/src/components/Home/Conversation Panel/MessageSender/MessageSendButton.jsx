// Imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { icons } from '../../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { setUpdateMessage } from '../../../../context/ConnectionsContext/ConnectionsContext.slice';
import { useSendMessageToSocket } from '../../../../socket/socket-client';


// Message Send Button
function MessageSendButton({ inputRef }) {
  const dispatch = useDispatch();
  const { sendMessageToSocket } = useSendMessageToSocket();
  const from = useSelector((state) => state.UserSlice).email;
  const to  = useSelector(state => state.ConnectionsSlice).currentConnection.email;

  const handleSendMessage = () => {
    const message = inputRef.current.value.trim();
    
    if (message === "") return;
    else inputRef.current.value = "";

    dispatch(setUpdateMessage([{ message, to }]));
    sendMessageToSocket({ message, from, to });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") 
        handleSendMessage();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [to]);

  return (
    <button
      onClick={handleSendMessage}
      className='h-[45px] px-6 rounded-md text-xl text-white bg-[#7269ef] hover:bg-[#7269efee]'>
      <Icon icon={icons.send} />
    </button>
  );
}


// Export
export default React.memo(MessageSendButton);