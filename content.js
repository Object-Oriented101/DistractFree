console.log("Content script is ran");

chrome.runtime.onMessage.addListener(recievedMessage);

function recievedMessage(message, sender, sendResponse) {
    console.log(message.txt);
    
}