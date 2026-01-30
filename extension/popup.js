let problemData = null;

document.addEventListener("DOMContentLoaded", () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "GET_MESSAGE_INFO" },
      (response) => {
        problemData = response;
      }
    );
  });

  document.querySelector("#btn").addEventListener("click", async () => {

    document.querySelector("#hint").textContent = "Thinking... 🤔";

    try {
      const response = await fetch("http://localhost:3000/hint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(problemData)
      });

      const data = await response.json();

      document.querySelector("#hint").textContent = data.hint;

    } catch (error) {
      document.querySelector("#hint").textContent =
        "Backend not running ❌";
    }
  });

});
