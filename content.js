chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_MESSAGE_INFO") {

    const hostname=window.location.hostname
    let platform="unknown"
    if(hostname.includes("leetcode")) 
        platform="leetcode"
    else if(hostname.includes("codechef"))
        platform="codechef"
    else if(hostname.includes("atcoder"))
        platform="atcoder"
    else if(hostname.includes("geeksforgeeks"))
        platform="geeksforgeeks"
    else if(hostname.includes("codingninjas"))
        platform="codingninjas"

    const title=document.title

    const difficulty=["Easy","Medium","Hard"].find(level=>
      document.body.innerText.includes(level)
    )||"unknown"

    const problem={
      title,
      platform,
      difficulty,
      url:window.location.href
    }


    sendResponse(problem);
  }
});
