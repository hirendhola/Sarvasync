/* eslint-disable @typescript-eslint/no-explicit-any */
export const openOAuthPopup = (url: string): Promise<{ success: boolean; data?: any }> => {
  return new Promise((resolve) => {
    const popup = window.open(
      url,
      'oauth',
      'width=600,height=700,scrollbars=yes,resizable=yes'
    );

    const checkClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkClosed);
        resolve({ success: false });
      }
    }, 1000);

    // Listen for messages from the popup
    const messageListener = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      
      if (event.data.type === 'OAUTH_SUCCESS') {
        clearInterval(checkClosed);
        popup?.close();
        window.removeEventListener('message', messageListener);
        resolve({ success: true, data: event.data.payload });
      } else if (event.data.type === 'OAUTH_ERROR') {
        clearInterval(checkClosed);
        popup?.close();
        window.removeEventListener('message', messageListener);
        resolve({ success: false });
      }
    };

    window.addEventListener('message', messageListener);
  });
};