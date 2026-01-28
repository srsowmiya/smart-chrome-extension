document.addEventListener("DOMContentLoaded", () => {

  const output = document.querySelector("#test");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "GET_MESSAGE_INFO" },
      (response) => {

        if (response && response.title) {
          output.textContent = response.title;
        } else {
          output.textContent = "Open a coding problem page";
        }

      }
    );

  });

});
