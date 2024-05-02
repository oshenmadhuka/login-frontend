// Mock URL.createObjectURL if not available
if (typeof window !== 'undefined' && typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectURL', {
      value: () => ''
    });
  }
  
  // Mock Worker if not available
  if (typeof Worker === 'undefined') {
    global.Worker = class {
      addEventListener() {}
  
      removeEventListener() {}
  
      dispatchEvent() {
        return false;
      }
  
      onmessage() {}
  
      onmessageerror() {}
  
      onerror() {}
  
      postMessage() {}
  
      terminate() {}
    };
  }
  