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
    try{
    const response= await fetch('http://localhost:3000/hint',{
      method:"POST",
       headers: {
      "Content-Type": "application/json"
    },
      body:json.Stringfy(problemData)})
      const res= await response.json()

      document.querySelector("#hint").textContent=res.hint
  }
  catch(e){
    document.querySelector("#hint").textContent="there is an error with the backend"
  }

  });

});




