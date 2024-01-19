// Imports
import React from 'react';
import { Icon } from '@iconify/react';
import { icons } from '../../../../../utils/icons.util';
import { useRemoveConnection } from "../../../../../Hooks/userConnections/useRemoveConnection.hook";
import { useDispatch, useSelector } from 'react-redux';
import { setConnectionProfile } from '../../../../../context/GlobalContext/global.slice';
import { setChatRoom } from '../../../../../context/GlobalContext/global.slice';
import { setCurrentConnection } from '../../../../../context/ConnectionsContext/connections.slice';

// Remove
function Remove() {
  const dispatch = useDispatch();
  const removeConnection = useRemoveConnection();
  const currentConnection = useSelector(state => state.ConnectionsSlice).currentConnection;
  
  const handleRemove = () => {
    removeConnection.submit({ connectionEmail: currentConnection });
    dispatch(setConnectionProfile(false));
    dispatch(setChatRoom(false));
    dispatch(setCurrentConnection(''))
  }

  return (
    <button onClick={handleRemove} className='w-full flex items-center gap-2 rounded-md transition-all p-2 text-red-600 hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover'>
        <Icon icon={icons.delete} />
        Remove
    </button>
  )
}


// Export
export default Remove;