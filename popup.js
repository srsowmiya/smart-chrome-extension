chrome.runtime.onMessage.addListener((m)=>{
    const  msg=document.querySelector("#test")
    msg.textContent=m.message
})
