/*
  This function for calling initAuth in the JSBridge
*/
const initAuth = (
  clientId: string,
  scope: string, // openid+offline+paotangid.citizen    
  callback: (authorizationCode: string) => void,
  callbackError: (errorCode: string, errorDescription: string) => void
) => {
  if (window.JSBridge) {
    // android
    window.bridge.initAuthCallback = callback;
    window.bridge.initAuthCallbackError = callbackError;
    window.JSBridge.initAuth?.(clientId, scope);
  } else if (window.webkit) {
    // ios
    window.bridge.initAuthCallback = callback;
    window.bridge.initAuthCallbackError = callbackError;
    window.webkit.messageHandlers.observer.postMessage({
      name: 'initAuth',
      clientId: clientId,
      scope: scope
    });
  }
};


export default initAuth;

//  x-api    pjePBNlCK-dcCwAakKIMI~een~r3is6Q

// client id     ff0f19c7-7440-4e92-bdbf-8c49b641608d
// secret KN9RwJEcm1cdnPPo3sPRxHbzbCJR0T