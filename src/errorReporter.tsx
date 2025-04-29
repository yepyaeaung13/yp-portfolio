
const reportErrorToExtension = (error: Error,) => {
  console.log("error occur");
  window.postMessage({
    type: 'REACT_ERROR',
    payload: {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toLocaleString(),
    },
  }, '*');
};

export default reportErrorToExtension;