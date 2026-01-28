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

        if(response!=null)
        {
            document.querySelector("#title").innerHTML=t
            document.querySelector("#platf").innerHTML=p
            document.querySelector("#diffi").innerHTML=d
            document.querySelector("#url").innerHTML=u
        }

      }
    );

  });

});
