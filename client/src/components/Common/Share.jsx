import React from 'react';

function ShareButton() {
  const shareContent = async () => {
    try {
      await navigator.share({
        title: 'Share Title',
        text: 'Description or message to share',
        url: 'https://example.com',
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };

  return (
    <button onClick={shareContent}>Share</button>
  );
}

export default ShareButton;
