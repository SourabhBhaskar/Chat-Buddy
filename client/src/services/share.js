const shareContent = async () => {
    try {
      await navigator.share({
        title: 'Share Title',
        text: 'Description or message to share',
        url: 'https://example.com', // URL to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };
  