import React from 'react';
import { Icon } from '@iconify/react';

function UploadedPictureButton({ save, exit }) {
  const handleExitClick = () => exit();
  const handleSaveClick = () => {
    save();
    exit();
  }
  return (
    <div className='flex justify-center items-center gap-4 text-white'>
        <button onClick={handleSaveClick} className='flex items-center gap-1 bg-green-500 hover:bg-green-600 px-4 py-2 my-4 rounded-md'>
        <Icon icon="iconamoon:check-bold" />
        Save
        </button>
        <button onClick={handleExitClick} className='flex items-center gap-1 bg-red-500 hover:bg-red-600 px-4 py-2 my-4 rounded-md'>
        <Icon icon="iconamoon:do-undo-bold" />
        Exit
        </button>
    </div>
  )
}

export default UploadedPictureButton