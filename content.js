chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_MESSAGE_INFO") {
    sendResponse({
      title: document.title
    });
  }
});
