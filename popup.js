document.addEventListener("DOMContentLoaded", () => {

  const output = document.querySelector("#test");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "GET_MESSAGE_INFO" },
      (response) => {
        t=response.title
        p=response.platform
        u=response.url
        d=response.difficulty

       

      }
    );

  });

});

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#hint").textContent =
    "Think about using a hash map to reduce time complexity.";
});

