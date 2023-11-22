import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Icon } from '@iconify/react';

function TakePhoto({ setCurrImg, exit }) {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  // Function to capture a photo from the webcam
  const handleTakePhoto = () => {
    const capturedPhoto = webcamRef.current.getScreenshot();
    setCapturedPhoto(capturedPhoto);
  };

  // Function to retake the photo
  const handleRetakePhoto = () => setCapturedPhoto('');

  // Function to exit the photo capture screen
  const handleExitClick = () => exit();

  // Function to save the captured photo
  const handleSaveClick = () => {
    setCurrImg(capturedPhoto);
    exit();
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [width, height])

  const videoConstraints = {
    width: width,
    height: height,
    facingMode: "user",
    mirrored: true,
  }

  return (
    <div className="w-screen h-screen top-0 left-0 fixed z-50 mx-auto bg-gray-900 flex justify-center items-center">
      { !capturedPhoto && (<Webcam audio={false} ref={webcamRef} videoConstraints={videoConstraints} />)}
      { capturedPhoto && <img src={capturedPhoto} alt="Captured" /> }
      <div className='absolute bottom-0 flex gap-8'>
        {capturedPhoto && (
          <button onClick={handleSaveClick} className='flex items-center gap-1 bg-green-500 hover:bg-green-600 px-4 py-2 my-4 rounded-full'>
            <Icon icon="iconamoon:check-bold" />
            Save
          </button>
        )}
        {capturedPhoto && (
          <button onClick={handleRetakePhoto} className='flex items-center gap-1 bg-blue-500 hover:bg-blue-600 px-4 py-2 my-4 rounded-full'>
            <Icon icon="mdi:camera" />
            Retake
          </button>
        )}
        {!capturedPhoto && (
          <button onClick={handleTakePhoto} className='flex items-center gap-1 bg-blue-500 hover:bg-blue-600 px-4 py-2 my-4 rounded-full'>
            <Icon icon="mdi:camera" />
            Take
          </button>
        )}
        <button onClick={handleExitClick} className='flex items-center gap-1 bg-red-500 hover:bg-red-600 px-4 py-2 my-4 rounded-full'>
          <Icon icon="iconamoon:do-undo-bold" />
          Exit
        </button>
      </div>
    </div>
  );
}

export default TakePhoto;
