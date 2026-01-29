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

  document.querySelector("#btn").addEventListener("click", () => {
    const hint = getHint(problemData);
    document.querySelector("#hint").textContent = hint;
  });

});

function getHint(problemData){
  if(problemData.difficulty==="Easy")
      return "start with a brute force"
  else if(problemData.difficulty==="Medium")
    return "try to optimise your solution"
  else if(problemData.difficulty==="Hard")
    return "Look at the constraints properly"
  
}


