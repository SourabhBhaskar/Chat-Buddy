import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Icon } from '@iconify/react';

function TakePhoto({ states, setStates }) {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleCaptureClick = () => {
    const capturedPhoto = webcamRef.current.getScreenshot();
    setCapturedPhoto(capturedPhoto);
  };

  const handleCancelClick = () => setStates.setTake(false);

  const handleSaveClick = () => {
    setStates.setShowSC(true);
    setStates.setImgURL(capturedPhoto);
    setStates.setTake(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 flex justify-center items-center">
      <div className="relative w-full h-full">
        { !capturedPhoto && (
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={{ width: window.innerWidth, height: window.outerHeight }}
          />
        )}
        { capturedPhoto && <img src={capturedPhoto} alt="Captured" /> }
        <div className="absolute bottom-4 left-0 right-0 text-center">
          {capturedPhoto ? (
            <button onClick={handleSaveClick} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
              <Icon icon="fluent-mdl2:cancel" /> Save
            </button>
          ) : (
            <>
              <button onClick={handleCaptureClick} className="px-4 py-2 bg-blue-500 text-white rounded-full hover-bg-blue-600">
                <Icon icon="mdi:camera" /> Take Photo
              </button>
              <button onClick={handleCancelClick} className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                <Icon icon="fluent-mdl2:cancel" /> Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TakePhoto;
