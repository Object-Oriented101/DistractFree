console.log("Content script is ran");

chrome.runtime.onMessage.addListener(recievedMessage);

function recievedMessage(message, sender, sendResponse) {
    console.log(message.txt);
    
}

window.onload = function() {
    console.log("INSIDE THE CORRECT FUNCTION");
    document.getElementById('submit_button').onclick = function() {
        var value = document.getElementById('user_input').value;
        alert(value);
    }
}
