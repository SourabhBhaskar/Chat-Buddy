import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { icons } from '../../../utils/icons.util';
import { Icon } from '@iconify/react';
import { setUpdateMessage } from '../../../context/ConnectionsContext/ConnectionsContext.slice';
import { useSendMessage } from '../../../Hooks/sendMessage.hook';


function MsgSendBtn({ inpRef }) {
    const { sendMessage } = useSendMessage();
  
    const handleSendMessage = () => {
      const message = inpRef.current.value.trim();
      if (message === "") return;
      else inpRef.current.value = "";
      sendMessage(message);
    };
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Enter") 
          handleSendMessage();
      }
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
  
    return (
      <button
        onClick={handleSendMessage}
        className={`h-[45px] px-6 rounded-md text-xl text-white bg-[#7269ef] hover:bg-[#7269efee]`}>
        <Icon icon={icons.send} />
      </button>
    );
}

export default MsgSendBtn